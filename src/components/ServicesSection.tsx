
import { useState, useEffect, useRef } from 'react';
import { PiggyBank, CreditCard, Lightbulb, Briefcase, Building, Users, Tractor, Utensils } from 'lucide-react';
import { Button } from './ui/button';

// Interface pour les données des secteurs
interface SectorData {
  name: string;
  icon: React.ReactNode;
  image: string;
}

const ServicesSection = () => {
  const [selectedTab, setSelectedTab] = useState('epargne');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Données des secteurs avec images - Mise à jour des correspondances d'images
  const sectorsData: SectorData[] = [
    {
      name: "Agriculture",
      icon: <Tractor size={24} />,
      image: "/lovable-uploads/979ab13b-ffaa-4644-9c37-21a34993b94e.png"
    },
    {
      name: "Commerce & Immobilier",
      icon: <Building size={24} />,
      image: "/lovable-uploads/9c139f4f-3ab8-4e82-bd48-c0e21e347e4b.png"
    },
    {
      name: "Artisanat",
      icon: <Briefcase size={24} />,
      image: "/lovable-uploads/d5c1b6fa-209f-44bd-ab4e-6364abe1db41.png" // Artisanat utilise l'image précédente d'Immobilier
    },
    {
      name: "Alimentation",
      icon: <Utensils size={24} />, 
      image: "/lovable-uploads/dee6e850-14b7-4bb7-9975-d3322afa2065.png" // Alimentation utilise l'image précédente de Restauration
    },
    {
      name: "Immobilier",
      icon: <Building size={24} />,
      image: "/lovable-uploads/07cc0bcd-110e-40f6-8f92-2ae067e953c3.png" // Immobilier utilise l'image précédente d'Artisanat
    },
    {
      name: "Prestation de service",
      icon: <Briefcase size={24} />,
      image: "/lovable-uploads/2735e185-71b8-4918-84de-ad34923a69c8.png" // Prestation de service utilise l'image précédente d'Alimentation
    },
    {
      name: "Restauration",
      icon: <Utensils size={24} />,
      image: "/lovable-uploads/385ec5d5-d04e-4d41-a6dd-a663ed7314c8.png" // Nouvelle image pour Restauration
    },
    {
      name: "Projets communautaires",
      icon: <Users size={24} />,
      image: "/lovable-uploads/3760c713-8001-49f0-94c7-265205d18e9d.png"
    }
  ];

  const renderSavingsProducts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <PiggyBank size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Épargne par pointage</h4>
        <p className="text-gray-600 mb-4">
          Épargnez avec la carte de pointage et accédez à un crédit en devenant membre. Durée minimum de 3 mois de cotisation.
        </p>
        <div className="text-sm text-gray-700 space-y-1">
          <p>• Mise minimum : 500 FCFA, 1000 FCFA, 2000 FCFA, 3000 FCFA, 5000 FCFA</p>
          <p>• Paiement direct ou par Airtel Money</p>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <PiggyBank size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Épargne classique</h4>
        <p className="text-gray-600 mb-2">Plusieurs options adaptées à vos besoins :</p>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="border-l-2 border-mecl-500 pl-3 py-1">
            <span className="font-semibold">Épargne à vue</span> - Votre allié pour des situations imprévues
          </li>
          <li className="border-l-2 border-mecl-500 pl-3 py-1">
            <span className="font-semibold">Plan épargne</span> - Faites fructifier vos économies petit à petit (Rémunérée à 1% par an)
          </li>
          <li className="border-l-2 border-mecl-500 pl-3 py-1">
            <span className="font-semibold">Épargne à terme</span> - Placement simple et sûr avec un taux d'intérêt avantageux (6-12 mois) rémunéré à 2,5% à 3,75%
          </li>
        </ul>
      </div>
    </div>
  );

  const renderCreditProducts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <CreditCard size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Crédit de consommation</h4>
        <p className="text-gray-600 mb-4">
          Même les plus nantis ont besoin d'un coup de pouce. Nous vous aidons à équiper votre maison sans contrainte.
        </p>
        <div className="text-sm text-gray-700 space-y-1">
          <p>• Montants adaptés à vos besoins</p>
          <p>• Conditions souples et flexibles</p>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <Briefcase size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Crédit de trésorerie</h4>
        <p className="text-gray-600 mb-4">
          Pour faire face aux dépenses urgentes de votre structure et maintenir votre activité.
        </p>
        <div className="text-sm text-gray-700 space-y-1">
          <p>• Réponse rapide pour vos besoins urgents</p>
          <p>• Accompagnement personnalisé</p>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-6 card-hover md:col-span-2">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <Lightbulb size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Crédit AGR</h4>
        <p className="text-gray-600 mb-4">
          Ensemble, prenons des risques pour financer vos micro-entreprises, que ce soit en groupe ou individuellement.
        </p>
        <div className="text-sm text-gray-700 space-y-1">
          <p>• Montant minimum : 20.000 FCFA</p>
          <p>• Montant maximum : 500.000 FCFA (groupe ou individuel)</p>
          <p>• Montant maximum du 1er crédit : 200.000 FCFA</p>
          <p>• Durée : 60 jours, 180 jours, 240 jours, 360 jours selon le montant</p>
        </div>
      </div>
    </div>
  );

  const renderSectors = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {sectorsData.map((sector, index) => (
        <div key={index} className="overflow-hidden rounded-xl card-hover transition-all duration-300 hover:shadow-lg">
          <div className="h-48 relative overflow-hidden">
            <img 
              src={sector.image} 
              alt={sector.name} 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h4 className="text-xl font-semibold">{sector.name}</h4>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-2">
              {sector.icon}
            </div>
            <p className="text-gray-600 text-sm">
              Financement adapté pour le secteur {sector.name.toLowerCase()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-white to-mecl-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-mecl-600 font-medium mb-3">Nos Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Découvrez nos produits financiers</h2>
          <p className="text-gray-700">
            Des solutions d'épargne et de crédit adaptées à vos besoins pour soutenir vos projets et améliorer votre quotidien.
          </p>
          <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button
            variant={selectedTab === 'epargne' ? 'default' : 'outline'}
            className={selectedTab === 'epargne' ? 'bg-mecl-600 hover:bg-mecl-700' : 'border-mecl-200 text-mecl-800'}
            onClick={() => setSelectedTab('epargne')}
          >
            <PiggyBank className="mr-2 h-4 w-4" />
            Produits d'épargne
          </Button>
          <Button
            variant={selectedTab === 'credit' ? 'default' : 'outline'}
            className={selectedTab === 'credit' ? 'bg-mecl-600 hover:bg-mecl-700' : 'border-mecl-200 text-mecl-800'}
            onClick={() => setSelectedTab('credit')}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Produits de crédit
          </Button>
          <Button
            variant={selectedTab === 'secteurs' ? 'default' : 'outline'}
            className={selectedTab === 'secteurs' ? 'bg-mecl-600 hover:bg-mecl-700' : 'border-mecl-200 text-mecl-800'}
            onClick={() => setSelectedTab('secteurs')}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Secteurs financés
          </Button>
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {selectedTab === 'epargne' && renderSavingsProducts()}
          {selectedTab === 'credit' && renderCreditProducts()}
          {selectedTab === 'secteurs' && renderSectors()}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
