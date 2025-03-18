
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MembershipSection = () => {
  const [activeTab, setActiveTab] = useState("particuliers");

  return (
    <section id="membership" className="py-24 bg-mecl-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-mecl-600 font-medium mb-3">Espace membres</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre communauté</h2>
          <p className="text-gray-700">
            La MECL propose des services adaptés aux besoins de chaque type de membre. Découvrez comment vous pouvez bénéficier de nos avantages selon votre profil.
          </p>
          <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="particuliers" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10">
              <TabsTrigger value="particuliers" className="text-sm md:text-base py-3">Particuliers</TabsTrigger>
              <TabsTrigger value="entreprises" className="text-sm md:text-base py-3">Entreprises</TabsTrigger>
              <TabsTrigger value="associations" className="text-sm md:text-base py-3">Associations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="particuliers" className="mt-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 reveal-on-scroll">
                  <h3 className="text-2xl font-bold text-mecl-800">Pour les particuliers</h3>
                  <p className="text-gray-700">
                    Que vous souhaitiez épargner pour un projet, financer vos études ou créer une petite activité, la MECL vous accompagne avec des solutions adaptées à vos besoins.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Épargne sécurisée et rémunérée</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Microcrédits aux conditions avantageuses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Accompagnement personnalisé</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-4 flex items-center gap-2">
                    <Link to="/requirements">
                      Devenir membre
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
                <div className="reveal-on-scroll delay-100">
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/f3d2000f-3b87-4c04-9dbf-2165da93d3cd.png" 
                      alt="Service client MECL" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="entreprises" className="mt-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 reveal-on-scroll">
                  <h3 className="text-2xl font-bold text-mecl-800">Pour les entreprises</h3>
                  <p className="text-gray-700">
                    La MECL accompagne les entrepreneurs et les entreprises avec des solutions de financement adaptées au développement de vos activités.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Financement d'équipements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Crédits de trésorerie</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Conseil en gestion d'entreprise</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-4 flex items-center gap-2">
                    <Link to="/requirements">
                      Devenir membre
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
                <div className="reveal-on-scroll delay-100">
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/6d7e72a1-ffbe-4ddf-8fed-b28352853db0.png" 
                      alt="Gestion professionnelle MECL" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="associations" className="mt-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 reveal-on-scroll">
                  <h3 className="text-2xl font-bold text-mecl-800">Pour les associations</h3>
                  <p className="text-gray-700">
                    Les associations et groupements communautaires peuvent bénéficier de solutions financières adaptées à leurs activités et leurs projets.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Financement de projets collectifs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Gestion de fonds associatifs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-mecl-100 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-mecl-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Accompagnement de projets communautaires</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-4 flex items-center gap-2">
                    <Link to="/requirements">
                      Devenir membre
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
                <div className="reveal-on-scroll delay-100">
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/cf4abede-6a80-49d6-8c1e-d63491fc6448.png" 
                      alt="Conseil financier MECL" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center reveal-on-scroll">
            <div className="mb-6">
              <div className="inline-block rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/1e885a2f-3294-42fc-8c7c-28b1fb261899.png" 
                  alt="Bâtiment MECL" 
                  className="w-full max-w-2xl h-auto mx-auto"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-mecl-800">Nos établissements sont à votre service</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Rendez-vous dans l'une de nos caisses locales pour découvrir tous nos services et bénéficier d'un accompagnement personnalisé par nos conseillers.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" className="flex items-center gap-2 mx-auto">
                <Link to="/sales-points">
                  Nos points de vente
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
