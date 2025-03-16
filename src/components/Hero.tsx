
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-mecl-100 animate-float opacity-70"></div>
        <div className="absolute bottom-20 left-[5%] w-32 h-32 rounded-full bg-mecl-200 animate-float opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] left-[15%] w-16 h-16 rounded-full bg-mecl-300 animate-float opacity-50" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-block bg-mecl-100 text-mecl-800 px-4 py-1 rounded-full text-sm font-medium">
              Votre microfinance de proximité
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Mutuelle d'épargne et de crédit likelemba</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Favoriser l'inclusion financière et contribuer à l'amélioration de la qualité de vie par la lutte contre la pauvreté.
            </p>
            <p className="text-sm text-gray-600 font-medium">
              Etablissement de microfinance 1ère catégorie<br />
              Agrement n° 6793/MFB-CAB DU 17/8/2018
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-mecl-600 hover:bg-mecl-700 text-white px-6 py-6 rounded-md transition-all duration-300 flex items-center gap-2 text-lg">
                <Link to="/requirements">
                  Devenir membre
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild className="bg-white text-mecl-800 hover:bg-mecl-50 border border-mecl-200 px-6 py-6 rounded-md transition-all duration-300 text-lg">
                <Link to="/services">
                  Nos services
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden">
              {/* Updated image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative flex justify-center items-center p-4">
                <img 
                  src="/lovable-uploads/9dafcac9-f4fa-4507-848a-ef8bb9a99a9e.png" 
                  alt="MECL Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-mecl-800">MECL</h3>
                <p className="text-sm text-gray-600">Ensemble pour un avenir meilleur</p>
                <p className="text-sm text-mecl-600 mt-2 italic">Votre réussite, c'est notre priorité</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mecl-500 rounded-2xl -z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-mecl-300 rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
