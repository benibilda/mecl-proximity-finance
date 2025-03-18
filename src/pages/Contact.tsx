
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
            <h1 className="text-4xl font-bold mb-4 text-gradient">Contactez-Nous</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
          
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-mecl-600 text-white p-8">
                      <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                      
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-mecl-500/20 p-3 rounded-full mr-4">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Adresse</h3>
                            <p className="text-mecl-100">
                              N° 67 Rue Loudima croisement Boueta-Mbongo<br />
                              Moungali Q41, arrêt de bus Janne vialle<br />
                              Brazzaville
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-mecl-500/20 p-3 rounded-full mr-4">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Téléphone</h3>
                            <p className="text-mecl-100">
                              (+242) 06 940-43-09<br />
                              (+242) 06 607-19-04<br />
                              (+242) 06 686-28-41
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-mecl-500/20 p-3 rounded-full mr-4">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Email</h3>
                            <a 
                              href="mailto:contactmeMECL501@gmail.com" 
                              className="text-mecl-100 hover:text-white transition-colors"
                            >
                              contactmeMECL501@gmail.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mt-8">
                          <h3 className="font-semibold text-lg">Suivez-nous</h3>
                          <div className="flex space-x-4">
                            <a 
                              href="https://www.facebook.com/profile.php?id=61559962310244" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mecl-500/20 p-3 rounded-full hover:bg-mecl-500/40 transition-colors"
                              aria-label="Facebook"
                            >
                              <Facebook className="h-5 w-5" />
                            </a>
                            <a 
                              href="https://www.instagram.com/meclmicrofinance" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mecl-500/20 p-3 rounded-full hover:bg-mecl-500/40 transition-colors"
                              aria-label="Instagram"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                            <a 
                              href="https://x.com/la_mecl" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mecl-500/20 p-3 rounded-full hover:bg-mecl-500/40 transition-colors"
                              aria-label="Twitter"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-mecl-800">Visitez-nous</h2>
                      
                      <div className="space-y-6">
                        <p className="text-gray-600">
                          Nous vous invitons à vous rendre dans nos locaux pour discuter en personne avec nos conseillers. 
                          Notre équipe est à votre disposition pour vous accompagner dans vos projets.
                        </p>
                        
                        <Card>
                          <CardContent className="p-4">
                            <h3 className="text-xl font-semibold mb-4 text-mecl-700">Horaires d'ouverture</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Lundi - Vendredi</span>
                                <span className="font-medium">8h00 - 16h00</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Samedi</span>
                                <span className="font-medium">9h00 - 13h00</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Dimanche</span>
                                <span className="font-medium">Fermé</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="mt-6">
                          <h3 className="font-semibold text-lg mb-4 text-mecl-800">Points de vente</h3>
                          <p className="text-gray-600 mb-4">
                            Découvrez tous nos points de vente pour trouver celui qui est le plus proche de chez vous.
                          </p>
                          <Button asChild>
                            <Link to="/sales-points">
                              Voir nos points de vente
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-16 reveal-on-scroll">
            <div className="bg-mecl-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-mecl-800">Retrouvez-nous</h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63891.67243210151!2d15.215714066796875!3d-4.266301599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a32935add29c7%3A0xc9d45143693dda01!2sMoungali%2C%20Brazzaville%2C%20Congo!5e0!3m2!1sen!2sus!4v1656499401789!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation MECL"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
