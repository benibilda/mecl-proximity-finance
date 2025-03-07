
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo placeholder */}
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-mecl-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-xl text-mecl-800">MECL</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-mecl-700 transition-colors">Accueil</Link>
            <Link to="/about" className="text-foreground hover:text-mecl-700 transition-colors">À propos</Link>
            <Link to="/services" className="text-foreground hover:text-mecl-700 transition-colors">Services</Link>
            <Link to="/requirements" className="text-foreground hover:text-mecl-700 transition-colors">Devenir membre</Link>
            <Link to="/contact" className="text-foreground hover:text-mecl-700 transition-colors">Contact</Link>
            <Button className="bg-mecl-600 hover:bg-mecl-700 text-white">Espace membre</Button>
          </div>

          {/* Mobile navigation button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-foreground hover:text-mecl-700 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-mecl-700 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/services" 
                className="text-foreground hover:text-mecl-700 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/requirements" 
                className="text-foreground hover:text-mecl-700 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Devenir membre
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-mecl-700 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-mecl-600 hover:bg-mecl-700 text-white w-full">
                Espace membre
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
