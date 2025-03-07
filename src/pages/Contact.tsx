
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cette fonction serait implémentée pour gérer l'envoi du formulaire
    console.log('Formulaire soumis');
  };

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
            <div className="grid md:grid-cols-2 gap-10">
              <div className="reveal-on-scroll">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6 text-mecl-700">Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                          <Input id="name" placeholder="Votre nom" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                          <Input id="email" type="email" placeholder="votre@email.com" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                        <Input id="subject" placeholder="Objet de votre message" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <Textarea id="message" placeholder="Votre message" rows={5} required />
                      </div>
                      
                      <Button type="submit" className="w-full bg-mecl-600 hover:bg-mecl-700">
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8 reveal-on-scroll delay-100">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6 text-mecl-700">Nos Coordonnées</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-mecl-100 p-3 rounded-full mr-4">
                          <MapPin className="h-5 w-5 text-mecl-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Adresse</h3>
                          <p className="text-gray-600">
                            N° 67 Rue Loudima croisement Boueta-Mbongo<br />
                            Moungali Q41, arrêt de bus Janne vialle<br />
                            Brazzaville
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-mecl-100 p-3 rounded-full mr-4">
                          <Phone className="h-5 w-5 text-mecl-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Téléphone</h3>
                          <p className="text-gray-600">
                            (+242) 06 940-43-09<br />
                            (+242) 06 607-19-04<br />
                            (+242) 06 686-28-41
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-mecl-100 p-3 rounded-full mr-4">
                          <Mail className="h-5 w-5 text-mecl-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Email</h3>
                          <p className="text-gray-600">
                            contactmecl24@gmail.com
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-mecl-100 p-3 rounded-full mr-4">
                          <Facebook className="h-5 w-5 text-mecl-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Facebook</h3>
                          <a 
                            href="https://www.facebook.com/profile.php?id=61559962310244" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-mecl-600 hover:underline"
                          >
                            Page Facebook de la MECL
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold mb-4 text-mecl-700">Horaires d'ouverture</h2>
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
              </div>
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
