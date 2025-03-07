
import { useState, useEffect, useRef } from 'react';
import { PiggyBank, CreditCard, Lightbulb, Briefcase, Building, Users, Tractor, Utensils } from 'lucide-react';
import { Button } from './ui/button';

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
      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <Tractor size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Agriculture</h4>
        <p className="text-gray-600">
          Soutien aux exploitants agricoles, transformateurs, transporteurs et négociants des produits agricoles.
        </p>
      </div>

      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <Building size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Commerce & Immobilier</h4>
        <p className="text-gray-600">
          Financement pour les activités commerciales et les projets immobiliers.
        </p>
      </div>

      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <Utensils size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Restauration & Artisanat</h4>
        <p className="text-gray-600">
          Soutien aux restaurants, services d'alimentation et activités artisanales.
        </p>
      </div>

      <div className="glass-panel rounded-xl p-6 card-hover">
        <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
          <Users size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2">Développement communautaire</h4>
        <p className="text-gray-600">
          Financement de projets de développement communautaire et services sociaux.
        </p>
      </div>
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
