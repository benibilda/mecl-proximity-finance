
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, User, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Requirements = () => {
  // Pour scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8) {
          el.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Devenir Membre</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rejoignez la MECL et bénéficiez de nos services financiers adaptés à vos besoins
            </p>
          </div>
          
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="individual" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="individual" className="text-base">Personne Physique</TabsTrigger>
                  <TabsTrigger value="business" className="text-base">Personne Morale</TabsTrigger>
                </TabsList>
                
                <TabsContent value="individual" className="reveal-on-scroll">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-6">
                        <div className="bg-mecl-100 p-3 rounded-full mr-4 mt-1">
                          <User className="h-6 w-6 text-mecl-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Conditions d'adhésion pour les Personnes Physiques</h3>
                          <p className="text-gray-600">
                            Les personnes physiques peuvent facilement devenir membres de la MECL en suivant ces étapes simples.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 ml-2">
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Documents requis</h4>
                            <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                              <li>01 Copie CNI ou Passeport valide</li>
                              <li>02 Photos format identité en couleur</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Frais</h4>
                            <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                              <li>Frais d'ouverture de compte : 0 FCFA</li>
                              <li>Droit d'adhésion à la MECL : 10.000 FCFA</li>
                              <li>Dépôt minimum : illimité</li>
                              <li>Frais mensuels de gestion : 0 FCFA</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="business" className="reveal-on-scroll">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-6">
                        <div className="bg-mecl-100 p-3 rounded-full mr-4 mt-1">
                          <Users className="h-6 w-6 text-mecl-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Conditions d'adhésion pour les Personnes Morales</h3>
                          <p className="text-gray-600">
                            Les entreprises, associations et autres organisations peuvent également bénéficier des services de la MECL.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 ml-2">
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Documents requis</h4>
                            <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                              <li>01 copie CNI ou passeport valide du ou des dirigeant(s)</li>
                              <li>Les documents légaux (statuts, RI, RCCM, NIU)</li>
                              <li>02 Photos en couleur du ou des dirigeants</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Frais</h4>
                            <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                              <li>Frais d'ouverture : 0 FCFA</li>
                              <li>Droit d'adhésion à la MECL : 10.000 FCFA</li>
                              <li>Dépôt minimum : illimité</li>
                              <li>Frais mensuels de gestion : 0 FCFA</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-mecl-50 rounded-2xl p-8 reveal-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-center text-mecl-800">Nos Membres</h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                La MECL est fière de servir une diversité de membres venant de tous les secteurs de la société
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Commerçant(e)s", 
                  "Étudiants", 
                  "Enseignants", 
                  "Salariés du privé", 
                  "Micro-entreprises", 
                  "PME", 
                  "Artisans", 
                  "Restaurants", 
                  "Écoles privées",
                  "ONG", 
                  "Associations", 
                  "Fondations", 
                  "Particuliers",
                  "Ménages"
                ].map((member, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <span className="font-medium text-mecl-700">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="max-w-4xl mx-auto reveal-on-scroll">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-mecl-700">Les Raisons de Nous Choisir</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gammes variées de produits d'épargne et de crédit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Conditions d'accès souples et adaptées à vos besoins</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Proximité (possibilité de prendre les demandes sur le site)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Délai de traitement rapide des demandes de crédits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Conseil et appui technique des conseillers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Équipe dynamique et expérimentée à votre service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Sécurité de vos épargnes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-mecl-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Rémunération de votre épargne</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 text-center">
                    <Button asChild className="bg-mecl-600 hover:bg-mecl-700">
                      <Link to="/contact">
                        Nous contacter pour plus d'informations
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Requirements;
