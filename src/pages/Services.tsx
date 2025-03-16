
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, PiggyBank, Clock, Calendar, Wallet, BarChart4, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

// Définition de l'interface pour les données des secteurs
interface SectorData {
  name: string;
  image: string;
}

const Services = () => {
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

  // Données des secteurs d'intervention avec les images mises à jour selon les instructions
  const sectorsData: SectorData[] = [
    {
      name: "Agriculture",
      image: "/lovable-uploads/979ab13b-ffaa-4644-9c37-21a34993b94e.png"
    },
    {
      name: "Commerce",
      image: "/lovable-uploads/9c139f4f-3ab8-4e82-bd48-c0e21e347e4b.png"
    },
    {
      name: "Artisanat",
      image: "/lovable-uploads/d5c1b6fa-209f-44bd-ab4e-6364abe1db41.png" // Changé: Artisanat utilise l'image précédente d'Immobilier
    },
    {
      name: "Alimentation",
      image: "/lovable-uploads/dee6e850-14b7-4bb7-9975-d3322afa2065.png" // Changé: Alimentation utilise l'image précédente de Restauration
    },
    {
      name: "Immobilier",
      image: "/lovable-uploads/07cc0bcd-110e-40f6-8f92-2ae067e953c3.png" // Changé: Immobilier utilise l'image précédente d'Artisanat
    },
    {
      name: "Prestation de service",
      image: "/lovable-uploads/2735e185-71b8-4918-84de-ad34923a69c8.png" // Changé: Prestation de service utilise l'image précédente d'Alimentation
    },
    {
      name: "Restauration",
      image: "/lovable-uploads/dee6e850-14b7-4bb7-9975-d3322afa2065.png"
    },
    {
      name: "Projets communautaires",
      image: "/lovable-uploads/3760c713-8001-49f0-94c7-265205d18e9d.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Nos Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions financières adaptées à tous vos besoins
            </p>
          </div>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-mecl-700">Nos Produits d'Épargne</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="reveal-on-scroll card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-mecl-100 p-3 rounded-full mr-3">
                      <PiggyBank className="h-6 w-6 text-mecl-600" />
                    </div>
                    <h3 className="text-xl font-bold">Épargne par Pointage</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Épargnez avec la carte pointage pour accéder à un crédit en devenant membre.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-mecl-700">Caractéristiques</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Durée minimum: 3 mois de cotisation</li>
                      <li>• Mise minimum: 500 frs, 1000 frs, 2000 frs, 3000 frs, 5000 frs</li>
                      <li>• Paiement direct ou par Airtel Money</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal-on-scroll delay-100 card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-mecl-100 p-3 rounded-full mr-3">
                      <Wallet className="h-6 w-6 text-mecl-600" />
                    </div>
                    <h3 className="text-xl font-bold">Épargne Classique</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-mecl-700">Épargne à Vue</h4>
                      <p className="text-gray-600">Votre allié pour des situations imprévues. Un fonds pour faire face aux imprévus.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold text-mecl-700">Plan Épargne</h4>
                      <p className="text-gray-600">Faites fructifier vos économies petit à petit sur un compte sécurisé.</p>
                      <p className="text-gray-500 text-sm mt-1">Cette épargne est rémunérée à 1% par an</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal-on-scroll delay-200 card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-mecl-100 p-3 rounded-full mr-3">
                      <Calendar className="h-6 w-6 text-mecl-600" />
                    </div>
                    <h3 className="text-xl font-bold">Épargne à Terme</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Placement simple et sûr. La solution pour bénéficier d'un taux d'intérêt avantageux.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-mecl-700">Caractéristiques</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Durée: 6 à 12 mois</li>
                      <li>• Les DAT sont rémunérés aux taux de 2,5% à 3,75%</li>
                      <li>• Sécurité garantie</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-mecl-700">Nos Produits de Crédit</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="reveal-on-scroll card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-mecl-100 p-3 rounded-full mr-3">
                      <CreditCard className="h-6 w-6 text-mecl-600" />
                    </div>
                    <h3 className="text-xl font-bold">Crédit de Consommation</h3>
                  </div>
                  <p className="text-gray-600">
                    Même les plus nantis ont besoin d'un coup de pouce. Nous vous donnons un coup de pouce pour équiper votre maison sans contrainte.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal-on-scroll delay-100 card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-mecl-100 p-3 rounded-full mr-3">
                      <Clock className="h-6 w-6 text-mecl-600" />
                    </div>
                    <h3 className="text-xl font-bold">Crédit de Trésorerie</h3>
                  </div>
                  <p className="text-gray-600">
                    Pour faire face aux dépenses urgentes de votre structure. Une solution rapide et efficace.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal-on-scroll delay-200 card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-mecl-100 p-3 rounded-full mr-3">
                      <BarChart4 className="h-6 w-6 text-mecl-600" />
                    </div>
                    <h3 className="text-xl font-bold">Crédit AGR</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Ensemble, prenons des risques pour le financement des micro-entrepreneurs.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-mecl-700">Caractéristiques</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Montant minimum: 20.000 frs</li>
                      <li>• Montant maximum: 500.000 frs (groupe ou individuel)</li>
                      <li>• Montant maximum du 1er crédit: 200.000 frs et plus</li>
                      <li>• Durée min en fonction du montant: 60jrs, 180jrs, 240jrs, 360jrs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-10">
            <div className="bg-mecl-50 rounded-2xl p-8 reveal-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-center text-mecl-800">Nos Champs d'Intervention</h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                La MECL finance diverses activités dans plusieurs secteurs pour soutenir le développement économique local
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sectorsData.map((sector, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105",
                      "reveal-on-scroll",
                      index > 0 ? `delay-${Math.min(index * 100, 500)}` : ""
                    )}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={sector.image}
                        alt={`Secteur ${sector.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-mecl-700 text-center">{sector.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
