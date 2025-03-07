
import { useState, useEffect, useRef } from 'react';
import { UserPlus, Building, ShieldCheck, BadgeCheck } from 'lucide-react';
import { Button } from './ui/button';

const MembershipSection = () => {
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
      id="membership" 
      ref={sectionRef}
      className="py-24 bg-mecl-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-mecl-600 font-medium mb-3">Rejoignez-nous</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Devenir membre de la MECL</h2>
          <p className="text-gray-700">
            Rejoignez notre coopérative et bénéficiez de services financiers adaptés à vos besoins.
          </p>
          <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="glass-panel rounded-2xl p-8 space-y-6">
              <div className="bg-mecl-50 w-14 h-14 rounded-full flex items-center justify-center">
                <UserPlus className="h-7 w-7 text-mecl-600" />
              </div>
              <h3 className="text-2xl font-semibold">Personnes physiques</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>01 copie CNI ou Passeport valide</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>02 photos format identité en couleur</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Frais d'ouverture de compte : 0 FCFA</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Droit d'adhésion à la MECL : 10.000 FCFA</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Dépôt minimum : illimité</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Frais mensuels de gestion : 0 FCFA</span>
                </li>
              </ul>
              <Button className="w-full bg-mecl-600 hover:bg-mecl-700 text-white">
                Devenir membre particulier
              </Button>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="glass-panel rounded-2xl p-8 space-y-6">
              <div className="bg-mecl-50 w-14 h-14 rounded-full flex items-center justify-center">
                <Building className="h-7 w-7 text-mecl-600" />
              </div>
              <h3 className="text-2xl font-semibold">Personnes morales</h3>
              <p className="text-sm text-gray-600">(ME, PME, Écoles, ONG, Associations, Fondations, etc.)</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>01 copie CNI ou Passeport valide du ou des dirigeant(s)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Documents légaux (statuts, RI, RCCM, NIU)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>02 photos en couleur du ou des dirigeant(s)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Frais d'ouverture : 0 FCFA</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-mecl-100 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-mecl-500"></div>
                  </div>
                  <span>Droit d'adhésion à la MECL : 10.000 FCFA</span>
                </li>
              </ul>
              <Button className="w-full bg-mecl-600 hover:bg-mecl-700 text-white">
                Devenir membre professionnel
              </Button>
            </div>
          </div>
        </div>

        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="glass-panel rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Pourquoi nous choisir</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto bg-mecl-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <BadgeCheck className="h-8 w-8 text-mecl-600" />
                </div>
                <h4 className="font-semibold">Produits variés</h4>
                <p className="text-sm text-gray-600">
                  Gammes variées de produits d'épargne et de crédit adaptés à vos besoins
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto bg-mecl-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <BadgeCheck className="h-8 w-8 text-mecl-600" />
                </div>
                <h4 className="font-semibold">Proximité</h4>
                <p className="text-sm text-gray-600">
                  Conditions d'accès souples et traitement rapide de vos demandes
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto bg-mecl-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-mecl-600" />
                </div>
                <h4 className="font-semibold">Sécurité</h4>
                <p className="text-sm text-gray-600">
                  Sécurité de vos épargnes et rémunération avantageuse
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto bg-mecl-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <BadgeCheck className="h-8 w-8 text-mecl-600" />
                </div>
                <h4 className="font-semibold">Expertise</h4>
                <p className="text-sm text-gray-600">
                  Équipe dynamique et expérimentée à votre service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
