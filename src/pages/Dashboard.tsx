
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
    // Cette fonction serait implémentée plus tard pour gérer l'authentification
    console.log('Tentative de connexion');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="reveal-on-scroll">
              <CardContent className="pt-6 pb-8">
                <div className="text-center mb-8">
                  <div className="bg-mecl-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-mecl-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-mecl-800">Espace Membre</h1>
                  <p className="text-gray-600 mt-2">
                    Connectez-vous pour accéder à votre compte
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="account" className="text-sm font-medium text-gray-700">Numéro de compte</label>
                    <Input id="account" placeholder="Votre numéro de compte" required />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700">Mot de passe</label>
                      <a href="#" className="text-sm text-mecl-600 hover:underline">
                        Mot de passe oublié?
                      </a>
                    </div>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-mecl-600 hover:bg-mecl-700">
                    Se connecter
                  </Button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600">
                    Pas encore membre?{' '}
                    <Link to="/requirements" className="text-mecl-600 hover:underline font-medium">
                      Devenir membre
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center reveal-on-scroll delay-100">
              <p className="text-gray-600 mb-4">
                Pour plus d'informations sur nos services, veuillez nous contacter ou visiter notre agence.
              </p>
              <Button asChild variant="outline" className="inline-flex items-center gap-2">
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
