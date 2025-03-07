
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Milestone, History, Building2 } from 'lucide-react';

const About = () => {
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
            <h1 className="text-4xl font-bold mb-4 text-gradient">À propos de MECL</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre histoire, notre mission et notre vision pour l'avenir
            </p>
          </div>
          
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="reveal-on-scroll">
                <h2 className="text-2xl font-bold mb-4 text-mecl-700">Notre Histoire</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Créée en 2004 par les étudiants de l'IMB, la MECL est née sous forme d'un fonds rotatif de création d'entreprise (FRCE). Ce fonds était alimenté par les étudiants durant l'année académique à hauteur de 1000 Frs afin de développer les AGR au sein de l'institut.
                  </p>
                  <p className="text-gray-700">
                    En 2017, le fonds devient une COOPEC-DEMULCO, chargée de collecter l'épargne des étudiants par la carte de pointage et leur octroyer le microcrédit, afin de développer leur projet de création de micro entreprise individuelle et collective.
                  </p>
                  <p className="text-gray-700">
                    En 2018, la MECL, établissement de microfinance de la première catégorie, voit le jour par la solidarité entre les membres et par la volonté de créer une microfinance de proximité. Son objectif: favoriser l'inclusion et contribuer à l'amélioration de la qualité de vie, par la lutte contre la pauvreté et la précarité des membres, tout en suscitant la vocation entrepreneuriale afin de créer des richesses et l'emploi.
                  </p>
                  <p className="text-gray-700">
                    La MECL est née avec une forme juridique d'une société coopérative, avec un conseil d'administration (SCOOP-CA).
                  </p>
                </div>
              </div>
              <div className="reveal-on-scroll delay-200">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-mecl-100 p-3 rounded-full">
                        <Milestone className="h-6 w-6 text-mecl-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">2004</h3>
                        <p className="text-gray-600">Création du Fonds Rotatif de Création d'Entreprise (FRCE) par les étudiants de l'IMB</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-mecl-100 p-3 rounded-full">
                        <History className="h-6 w-6 text-mecl-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">2017</h3>
                        <p className="text-gray-600">Transformation en COOPEC-DEMULCO pour la collecte d'épargne et l'octroi de microcrédits</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-mecl-100 p-3 rounded-full">
                        <Building2 className="h-6 w-6 text-mecl-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">2018</h3>
                        <p className="text-gray-600">Naissance officielle de la MECL comme établissement de microfinance de première catégorie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="reveal-on-scroll card-hover">
                <CardContent className="pt-6">
                  <div className="bg-mecl-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-mecl-600 font-bold text-xl">V</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Notre Vision</h3>
                  <p className="text-gray-600">
                    Être un modèle de service financier de proximité pour ses membres.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="reveal-on-scroll delay-100 card-hover">
                <CardContent className="pt-6">
                  <div className="bg-mecl-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-mecl-600 font-bold text-xl">M</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Notre Mission</h3>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    <li>Rendre aux membres des services financiers dans les meilleures conditions</li>
                    <li>Offrir aux membres des produits et services financiers accessibles, flexibles et adaptés à leurs besoins</li>
                    <li>Améliorer les conditions de vie des membres</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="reveal-on-scroll delay-200 card-hover">
                <CardContent className="pt-6">
                  <div className="bg-mecl-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-mecl-600 font-bold text-xl">O</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Notre Objet Social</h3>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    <li>Procéder à la collecte de l'épargne de ses membres et consentir du crédit exclusivement au profit de ceux-ci</li>
                    <li>Favoriser la solidarité et la coopération entre les membres</li>
                    <li>Promouvoir l'éducation entre les membres</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section>
            <div className="bg-mecl-50 rounded-2xl p-8 reveal-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-center text-mecl-800">Nos Valeurs</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Proximité", "Intégrité", "Créativité", "Travail et loyauté", "Unité d'équipe", "Respect", "Excellence", "Sécurité"].map((value, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <span className="font-medium text-mecl-700">{value}</span>
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

export default About;
