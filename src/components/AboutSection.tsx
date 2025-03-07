
import { useState, useEffect, useRef } from 'react';
import { CalendarClock, Users, Target, Heart } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-mecl-600 font-medium mb-3">À propos de nous</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire et Mission</h2>
          <div className="w-20 h-1 bg-mecl-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="glass-panel rounded-2xl p-8 space-y-4">
              <div className="flex items-center">
                <CalendarClock className="w-8 h-8 text-mecl-600 mr-3" />
                <h3 className="text-xl font-semibold">Notre histoire</h3>
              </div>
              <p className="text-gray-700">
                Créée en 2004 par les étudiants de l'IMB, la MECL est née d'un fonds rotatif de création d'entreprise (FRCE), alimenté par les étudiants à hauteur de 1000 Frs afin de développer les AGR au sein de l'institut. En 2017, le fonds devient une coopec-demulco, avant de devenir en 2018 la MECL, un établissement de microfinance de première catégorie.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 space-y-4">
              <div className="flex items-center">
                <Target className="w-8 h-8 text-mecl-600 mr-3" />
                <h3 className="text-xl font-semibold">Notre vision</h3>
              </div>
              <p className="text-gray-700">
                Être un modèle de service financier de proximité pour nos membres.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 space-y-4">
              <div className="flex items-center">
                <Heart className="w-8 h-8 text-mecl-600 mr-3" />
                <h3 className="text-xl font-semibold">Notre mission</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Rendre aux membres des services financiers dans les meilleures conditions</li>
                <li>• Offrir aux membres des produits et services financiers accessibles, flexibles et adaptés à leurs besoins</li>
                <li>• Améliorer les conditions de vie des membres</li>
              </ul>
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="relative">
              {/* Image placeholder - replace with actual image when available */}
              <div className="aspect-video bg-mecl-100 rounded-2xl overflow-hidden relative shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-panel px-8 py-6 rounded-xl max-w-sm">
                    <h3 className="text-xl font-semibold text-mecl-800 mb-2">Valeurs fondamentales</h3>
                    <ul className="text-gray-700 grid grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Proximité
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Intégrité
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Créativité
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Loyauté
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Unité d'équipe
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Respect
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Excellence
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                        Sécurité
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-panel mt-6 rounded-2xl p-8 space-y-4">
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-mecl-600 mr-3" />
                  <h3 className="text-xl font-semibold">Nos membres</h3>
                </div>
                <ul className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                    Vendeurs et commerçants
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                    Étudiants et enseignants
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                    Micro-entreprises et PME
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                    Artisanat et restauration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                    Écoles privées
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mecl-500 rounded-full mr-2"></div>
                    ONG et associations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
