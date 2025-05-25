
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';

const SalesPoints = () => {
  const salesPoints = [
    {
      id: 1,
      name: "Point de vente Kintélé",
      location: "À proximité du stade",
      description: "Service complet d'épargne et de crédit"
    },
    {
      id: 2,
      name: "Caisse Marché Péage",
      location: "Marché Péage",
      description: "Point de service pour les commerçants"
    },
    {
      id: 3,
      name: "Caisse Marché Kintélé",
      location: "À l'arrêt Marché Kintélé",
      description: "Service adapté aux besoins des marchands"
    },
    {
      id: 4,
      name: "Caisse Mfilou",
      location: "Proche de la mairie de Mfilou",
      description: "Service de proximité pour les résidents"
    },
    {
      id: 5,
      name: "Caisse Marché Total",
      location: "Niveau du marché Total",
      description: "Caisse dédiée aux commerçants et clients"
    },
    {
      id: 6,
      name: "Point de vente Poto Poto",
      location: "Marché Poto Poto, bureau des communautés des marchés",
      description: "Service complet pour les commerçants"
    },
    {
      id: 7,
      name: "Caisse Moungali",
      location: "Quartier Moungali",
      description: "Service d'épargne et de crédit accessible"
    },
    {
      id: 8,
      name: "Caisse Ouenzé",
      location: "Quartier Ouenzé",
      description: "Point de service pour épargne et crédit"
    },
    {
      id: 9,
      name: "Agence d'Oyo",
      location: "Quartier Obangui, avenue Marcel Okoyo, République du Congo",
      description: "Nouvelle agence au service de la communauté d'Oyo",
      image: "/lovable-uploads/7b57fcdb-0425-45ab-9a74-ff27fbbe4800.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-12 bg-mecl-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-mecl-600 font-medium mb-3">Réseau</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Nos Points de Vente</h1>
              <p className="text-gray-700">
                La MECL est présente dans plusieurs quartiers de Brazzaville et maintenant à Oyo pour être au plus proche de ses membres.
                Découvrez nos caisses et points de service.
              </p>
              <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {salesPoints.map((point) => (
                <div key={point.id} className="glass-panel rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {point.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={point.image} 
                        alt={`Agence ${point.name}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-start mb-4">
                    <MapPin className="text-mecl-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-mecl-800">{point.name}</h3>
                      <p className="text-gray-600 mt-1">{point.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{point.description}</p>
                  <div className="w-12 h-1 bg-mecl-500/30 mt-4"></div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-mecl-100">
              <h2 className="text-2xl font-bold text-mecl-800 mb-4 text-center">Pourquoi choisir la MECL?</h2>
              <p className="text-gray-700 mb-6">
                Notre réseau de points de vente vous assure une présence de proximité, avec un accès facile à nos services financiers. 
                Chaque caisse est conçue pour répondre aux besoins spécifiques de sa communauté locale, que vous soyez commerçant, 
                entrepreneur, étudiant ou membre d'un ménage. Avec notre nouvelle agence d'Oyo, nous étendons notre couverture 
                pour mieux servir nos membres.
              </p>
              <div className="flex items-center justify-center">
                <span className="text-mecl-600 font-semibold text-lg">MECL, votre partenaire financier sûr!</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalesPoints;
