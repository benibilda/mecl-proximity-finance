
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Home, Tractor, Briefcase, Building, BookOpen, ShoppingBag, ArrowRight, ArrowLeft, ArrowUpRight, ArrowDownRight, ArrowUpLeft, ArrowDownLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Operation = () => {
  const clientCategories = [
    {
      id: 1,
      icon: BookOpen,
      title: "Institutions Éducatives",
      description: "La MECL fournit des services de crédit adaptés aux universités, écoles et instituts, permettant aux étudiants, élèves, enseignants et personnel administratif d'accéder à des financements. En retour, ces institutions et leurs membres s'engagent dans l'épargne régulière.",
      examples: "Étudiants, élèves, enseignants, personnel administratif"
    },
    {
      id: 2,
      icon: Home,
      title: "Ménages",
      description: "Les femmes au foyer sans activité génératrice de revenus peuvent bénéficier de crédits pour lancer des micro-projets. La MECL les accompagne dans le développement de ces activités tout en encourageant l'épargne pour assurer leur autonomie financière.",
      examples: "Femmes au foyer sans activités génératrices de revenus"
    },
    {
      id: 3,
      icon: Tractor,
      title: "Agriculture",
      description: "La MECL soutient le secteur agricole et toute sa chaîne de valeur. Des crédits adaptés sont proposés aux agriculteurs, transformateurs et distributeurs pour renforcer la production locale et améliorer la sécurité alimentaire, tout en encourageant l'épargne régulière.",
      examples: "Agriculteurs, transformateurs, distributeurs de produits agricoles"
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Incubateurs et Accélérateurs",
      description: "Les porteurs de projets de création ou de reprise d'entreprise et les start-ups de tous secteurs peuvent bénéficier de solutions de financement adaptées. La MECL propose également un accompagnement pour garantir la viabilité des projets et encourage l'épargne comme gage de durabilité.",
      examples: "Porteurs de projets, start-ups, entrepreneurs"
    },
    {
      id: 5,
      icon: ShoppingBag,
      title: "Commerçants et Artisans",
      description: "La MECL offre des solutions de crédit aux vendeurs de toutes catégories, artisans, coiffeurs, couturiers, chauffeurs de taxi et autres. Ces crédits permettent de développer leur activité tout en adoptant une culture d'épargne systématique.",
      examples: "Vendeurs, artisans, coiffeurs, couturiers, chauffeurs"
    },
    {
      id: 6,
      icon: Building,
      title: "Employés et Entreprises",
      description: "Les travailleurs, fonctionnaires et entreprises (TPE, PME, PMI, PMEA) peuvent accéder à des produits financiers adaptés à leurs besoins spécifiques. La MECL encourage également ces acteurs économiques à adopter une discipline d'épargne pour sécuriser leur avenir.",
      examples: "Travailleurs, fonctionnaires, TPE, PME, PMI, PMEA"
    }
  ];

  // Define relationship data
  const relationships = [
    {
      name: "Institutions Éducatives",
      icon: BookOpen,
      direction: "bidirectional",
      description: "MECL offre des crédits et reçoit l'épargne régulière",
      position: "top-left"
    },
    {
      name: "Ménages",
      icon: Home,
      direction: "bidirectional",
      description: "Financement de micro-projets et constitution d'épargne",
      position: "top-right"
    },
    {
      name: "Secteur Agricole",
      icon: Tractor,
      direction: "bidirectional",
      description: "Soutien financier et mobilisation de l'épargne",
      position: "middle-left"
    },
    {
      name: "Entrepreneurs",
      icon: Briefcase,
      direction: "bidirectional",
      description: "Financement de projets et accompagnement",
      position: "middle-right"
    },
    {
      name: "Commerçants",
      icon: ShoppingBag,
      direction: "bidirectional",
      description: "Crédits pour activités commerciales et épargne",
      position: "bottom-left"
    },
    {
      name: "Entreprises",
      icon: Building,
      direction: "bidirectional",
      description: "Solutions financières adaptées et épargne",
      position: "bottom-right"
    }
  ];

  // Helper function to determine which arrow to use based on position
  const getArrowIcon = (position) => {
    switch(position) {
      case "top-left": return ArrowDownRight;
      case "top-right": return ArrowDownLeft;
      case "middle-left": return ArrowRight;
      case "middle-right": return ArrowLeft;
      case "bottom-left": return ArrowUpRight;
      case "bottom-right": return ArrowUpLeft;
      default: return ArrowRight;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-12 bg-mecl-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-mecl-600 font-medium mb-3">Notre modèle</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Fonctionnement Épargne-Crédit</h1>
              <p className="text-gray-700">
                La MECL (Mutuelle d'Épargne et de Crédit Likelemba) propose un modèle financier inclusif basé sur le principe 
                de l'épargne et du crédit. Notre approche vise à servir diverses catégories de clients tout en encourageant 
                une culture d'épargne systématique.
              </p>
              <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
            </div>

            {/* Relationship schema section - enhanced with directional arrows */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-mecl-100 mb-16">
              <h2 className="text-2xl font-bold text-mecl-800 mb-8 text-center">Relations avec nos Partenaires</h2>
              
              <div className="relative">
                {/* Central MECL node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-40 h-40 rounded-full bg-mecl-600 flex items-center justify-center shadow-lg">
                    <div className="text-white text-center">
                      <h3 className="font-bold text-xl mb-1">MECL</h3>
                      <p className="text-xs">Mutuelle d'Épargne et de Crédit Likelemba</p>
                    </div>
                  </div>
                </div>
                
                {/* Partner nodes in a circle around MECL */}
                <div className="relative h-[600px] md:h-[700px]">
                  {relationships.map((rel, index) => {
                    // Calculate position in a circle
                    const angle = (index * (2 * Math.PI / relationships.length));
                    const radius = 260; // Adjust based on your design
                    const Icon = rel.icon;
                    const ArrowIcon = getArrowIcon(rel.position);
                    
                    // Calculate x and y coordinates for positioning
                    const x = 50 + 45 * Math.sin(angle);
                    const y = 50 - 32 * Math.cos(angle);
                    
                    // Text alignment based on position (left or right of the circle)
                    const textAlign = Math.sin(angle) < 0 ? "text-right" : "text-left";
                    
                    return (
                      <div 
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ 
                          left: `${x}%`, 
                          top: `${y}%`,
                          maxWidth: "240px" 
                        }}
                      >
                        <Card className="bg-white border-mecl-200 hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <Icon className="text-mecl-600 h-6 w-6" />
                              <h4 className="font-semibold text-mecl-800">{rel.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{rel.description}</p>
                            
                            {/* Bidirectional indicator with animated arrows */}
                            <div className="flex justify-center mt-2">
                              <span className="text-xs text-mecl-700 flex items-center gap-1">
                                <ArrowLeft size={12} className="text-mecl-600 animate-pulse" />
                                Épargne / Crédit
                                <ArrowRight size={12} className="text-mecl-600 animate-pulse" />
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* Animated connection lines with arrows */}
                        <div className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <ArrowIcon 
                              className="text-mecl-600 opacity-70 absolute animate-pulse" 
                              size={28}
                              style={{
                                left: rel.position.includes('right') ? '-70px' : 'auto',
                                right: rel.position.includes('left') ? '-70px' : 'auto',
                                top: rel.position.includes('bottom') ? '-70px' : 'auto',
                                bottom: rel.position.includes('top') ? '-70px' : 'auto'
                              }}
                            />
                          </div>
                        </div>

                        {/* Draw SVG connection lines */}
                        <svg 
                          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                          width="100%" 
                          height="100%" 
                          viewBox="0 0 100 100" 
                          style={{
                            position: "fixed", 
                            left: 0, 
                            top: 0, 
                            pointerEvents: "none",
                            zIndex: -1
                          }}
                        >
                          <line 
                            x1="50"
                            y1="50"
                            x2={rel.position.includes('right') ? '30' : '70'}
                            y2={rel.position.includes('bottom') ? '30' : rel.position.includes('top') ? '70' : '50'}
                            stroke="#0f935d" 
                            strokeWidth="2" 
                            strokeDasharray="4"
                            className="animate-pulse-slow"
                          />
                        </svg>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-mecl-700 font-medium">
                  La MECL entretient des relations bidirectionnelles avec tous ses partenaires, 
                  offrant des solutions de financement tout en encourageant l'épargne systématique.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-mecl-100 mb-16">
              <h2 className="text-2xl font-bold text-mecl-800 mb-6 text-center">Notre Philosophie</h2>
              <p className="text-gray-700 mb-6">
                La MECL s'engage à promouvoir l'inclusion financière en offrant des services adaptés aux besoins spécifiques 
                de chaque catégorie de clients. Notre objectif est double : faciliter l'accès au crédit pour développer des 
                activités génératrices de revenus et inculquer une discipline d'épargne pour garantir un avenir financier stable.
              </p>
              <div className="flex items-center justify-center">
                <span className="text-mecl-600 font-semibold text-lg italic">"Votre réussite, c'est notre priorité"</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientCategories.map((category) => (
                <div key={category.id} className="glass-panel rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <category.icon className="text-mecl-600 h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-mecl-800 text-center mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <div className="bg-mecl-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-mecl-700">Exemples: {category.examples}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-mecl-100">
              <h2 className="text-2xl font-bold text-mecl-800 mb-4 text-center">MECL, vous accompagne dans toutes vos activités!</h2>
              <p className="text-gray-700 mb-6 text-center">
                Quels que soient vos besoins financiers, la MECL propose des solutions adaptées et un accompagnement personnalisé.
                Notre équipe de professionnels est à votre disposition pour vous guider vers l'autonomie financière.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                <span className="px-4 py-2 bg-mecl-100 text-mecl-800 rounded-full">MECL, votre solution financière !</span>
                <span className="px-4 py-2 bg-mecl-100 text-mecl-800 rounded-full">MECL, votre partenaire financier sûr!</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Operation;
