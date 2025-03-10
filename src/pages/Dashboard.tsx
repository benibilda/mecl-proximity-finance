
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Demo images for slider
  const images = [
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce33a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Coopération et développement"
    },
    {
      url: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Épargne et investissement"
    },
    {
      url: "https://images.unsplash.com/photo-1565373679580-fc0cb538b465?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Soutien aux entrepreneurs"
    },
    {
      url: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Formation et éducation"
    }
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  // For scroll reveal animation
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

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-white to-mecl-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-mecl-800 reveal-on-scroll">
              Galerie MECL
            </h1>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl reveal-on-scroll mb-12">
              {/* Image slider */}
              <div className="relative h-[400px] md:h-[500px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.caption}</h3>
                    </div>
                  </div>
                ))}
                
                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImage === index ? 'bg-white scale-110' : 'bg-white/50'
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="reveal-on-scroll delay-100 border-none bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-mecl-800 mb-4 text-center">Découvrez nos services</h2>
                <p className="text-gray-700 mb-6 text-center">
                  La Mutuelle d'Épargne et de Crédit du Littoral (MECL) est une institution de microfinance qui offre une variété de services financiers adaptés à vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild className="bg-mecl-600 hover:bg-mecl-700 text-white">
                    <Link to="/services">Nos services</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-mecl-600 text-mecl-600 hover:bg-mecl-50">
                    <Link to="/requirements">Devenir membre</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
