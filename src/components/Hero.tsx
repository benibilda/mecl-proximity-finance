
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

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
              <span className="text-gradient">Mutuel d'épargne et de crédit likelemba</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Favoriser l'inclusion financière et contribuer à l'amélioration de la qualité de vie par la lutte contre la pauvreté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-mecl-600 hover:bg-mecl-700 text-white px-6 py-6 rounded-md transition-all duration-300 flex items-center gap-2 text-lg">
                Devenir membre
                <ArrowRight size={18} />
              </Button>
              <Button className="bg-white text-mecl-800 hover:bg-mecl-50 border border-mecl-200 px-6 py-6 rounded-md transition-all duration-300 text-lg">
                Nos services
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden">
              {/* Replace with actual image when available */}
              <div className="aspect-[4/3] bg-mecl-100 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-mecl-600 flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">M</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-mecl-800/70 backdrop-blur-sm text-white p-4">
                  <h3 className="font-semibold text-lg">MECL</h3>
                  <p className="text-sm">Ensemble pour un avenir meilleur</p>
                </div>
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
