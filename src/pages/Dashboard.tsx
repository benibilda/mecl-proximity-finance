import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();
  
  // Demo images for slider - updated with new images including Oyo branch
  const images = [
    {
      url: "/lovable-uploads/f3d2000f-3b87-4c04-9dbf-2165da93d3cd.png",
      caption: "Service client et accompagnement"
    },
    {
      url: "/lovable-uploads/cf4abede-6a80-49d6-8c1e-d63491fc6448.png",
      caption: "Conseil financier personnalisé"
    },
    {
      url: "/lovable-uploads/6d7e72a1-ffbe-4ddf-8fed-b28352853db0.png",
      caption: "Gestion professionnelle"
    },
    {
      url: "/lovable-uploads/1e885a2f-3294-42fc-8c7c-28b1fb261899.png",
      caption: "Établissement MECL"
    },
    {
      url: "/lovable-uploads/6b926d1e-1c09-470a-ace4-8a97b4f3fe3e.png",
      caption: "Accueil des clients"
    },
    {
      url: "/lovable-uploads/5637d215-08ee-407a-895c-ecb63987636f.png",
      caption: "Stand MECL au marché"
    },
    {
      url: "/lovable-uploads/fd7c5de6-236a-4382-a801-9dc7ec77a073.png",
      caption: "Équipe MECL en service"
    },
    {
      url: "/lovable-uploads/d6bd2a5d-4ab4-4a1a-99b8-faef9215fe9e.png",
      caption: "Inauguration de l'agence MECL Oyo"
    },
    {
      url: "/lovable-uploads/cef3762e-8445-4785-b694-51f6de7a4572.png",
      caption: "Cérémonie d'ouverture MECL Oyo"
    },
    {
      url: "/lovable-uploads/578300cf-3f01-497e-b78b-8a72de15eaa7.png",
      caption: "Présentation officielle MECL Oyo"
    },
    {
      url: "/lovable-uploads/7772c8e5-ee35-4a80-b5cc-31fdd5167f89.png",
      caption: "Façade de l'agence MECL Oyo"
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
      
      <main className="flex-grow pt-16 md:pt-24 pb-16 bg-gradient-to-b from-white to-mecl-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-mecl-800 reveal-on-scroll">
              {isMobile ? "Galerie MECL" : "Galerie MECL"}
            </h1>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl reveal-on-scroll mb-8 md:mb-12">
              {/* Image slider */}
              <div className="relative h-[300px] sm:h-[350px] md:h-[500px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`MECL ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{image.caption}</h3>
                    </div>
                  </div>
                ))}
                
                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white rounded-full p-1.5 md:p-2 transition-all duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={isMobile ? 20 : 24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white rounded-full p-1.5 md:p-2 transition-all duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={isMobile ? 20 : 24} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 md:space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                        currentImage === index ? 'bg-white scale-110' : 'bg-white/50'
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            
            {isMobile ? (
              // Mobile layout - Vertical cards
              <div className="space-y-4 reveal-on-scroll delay-100">
                <Card className="border-none bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-mecl-800 mb-3 text-center">Découvrez nos services</h2>
                    <p className="text-gray-700 mb-4 text-center text-sm">
                      La Mutuelle d'Épargne et de Crédit du Littoral (MECL) est une institution de microfinance qui offre une variété de services financiers adaptés à vos besoins.
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button asChild className="bg-mecl-600 hover:bg-mecl-700 text-white w-full">
                        <Link to="/services">Nos services</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-mecl-600 text-mecl-600 hover:bg-mecl-50 w-full">
                        <Link to="/requirements">Devenir membre</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-mecl-50/80 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-mecl-800 mb-3 text-center">Points de vente</h2>
                    <p className="text-gray-700 mb-4 text-center text-sm">
                      Découvrez nos points de service à travers Brazzaville et à Oyo pour être au plus proche de nos membres.
                    </p>
                    <Button asChild className="bg-mecl-600 hover:bg-mecl-700 text-white w-full">
                      <Link to="/sales-points">Voir nos caisses</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Desktop layout - Single card
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
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
