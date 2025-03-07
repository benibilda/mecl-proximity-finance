
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mecl-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brief Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-mecl-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-xl">MECL</span>
            </div>
            <p className="text-gray-300 mt-4">
              Mutuel d'épargne et de crédit likelemba, votre microfinance de proximité pour l'inclusion financière et la lutte contre la pauvreté.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mecl-700 pb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/requirements" className="text-gray-300 hover:text-white transition-colors">Devenir membre</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mecl-700 pb-2">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#epargne" className="text-gray-300 hover:text-white transition-colors">Services d'épargne</Link>
              </li>
              <li>
                <Link to="/services#credit" className="text-gray-300 hover:text-white transition-colors">Services de crédit</Link>
              </li>
              <li>
                <Link to="/services#conseil" className="text-gray-300 hover:text-white transition-colors">Conseil et formation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mecl-700 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-mecl-500 mr-2 mt-0.5" />
                <span className="text-gray-300">N° 67 Rue Loudima croisement Boueta-Mbongo Moungali Q41 arrêt de bus Janne vialle Brazzaville</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-mecl-500 mr-2" />
                <span className="text-gray-300">(+242) 06 940-43-09 / 06 607 19 04 / 06 686 28 41</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-mecl-500 mr-2" />
                <a href="mailto:contactmecl24@gmail.com" className="text-gray-300 hover:text-white transition-colors">contactmecl24@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Facebook className="h-5 w-5 text-mecl-500 mr-2" />
                <a href="https://www.facebook.com/profile.php?id=61559962310244" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mecl-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MECL - Mutuel d'épargne et de crédit likelemba. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
