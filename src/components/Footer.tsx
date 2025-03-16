
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mecl-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brief Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9dafcac9-f4fa-4507-848a-ef8bb9a99a9e.png" 
                alt="MECL Logo" 
                className="h-12 mb-2"
              />
            </div>
            <p className="text-gray-300 mt-4">
              Mutuelle d'épargne et de crédit likelemba, votre microfinance de proximité pour l'inclusion financière et la lutte contre la pauvreté.
            </p>
            <p className="text-gray-300">
              Etablissement de microfinance 1ère catégorie<br />
              Agrement n° 6793/MFB-CAB DU 17/8/2018
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/profile.php?id=61559962310244" target="_blank" rel="noopener noreferrer" className="text-mecl-500 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/meclmicrofinance" target="_blank" rel="noopener noreferrer" className="text-mecl-500 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/la_mecl" target="_blank" rel="noopener noreferrer" className="text-mecl-500 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mecl-700 pb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/requirements" className="text-gray-300 hover:text-white transition-colors">Devenir membre</Link>
              </li>
              <li>
                <Link to="/sales-points" className="text-gray-300 hover:text-white transition-colors">Nos points de vente</Link>
              </li>
              <li>
                <Link to="/operation" className="text-gray-300 hover:text-white transition-colors">Fonctionnement</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link>
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
            <h3 className="text-lg font-semibold mt-6 mb-2 border-b border-mecl-700 pb-2">Notre devise</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Votre réussite, c'est notre priorité</li>
              <li className="text-gray-300">MECL, votre solution financière !</li>
              <li className="text-gray-300">MECL, votre partenaire financier sûr!</li>
              <li className="text-gray-300">MECL, vous accompagne dans toutes vos activités!</li>
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
                <span className="text-gray-300">(+242) 06-940-43-09 / 06-607-19-04 / 06-686-28-41 / 06-598-27-42 / 06-406-07-99</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-mecl-500 mr-2" />
                <a href="mailto:contactmeMECL501@gmail.com" className="text-gray-300 hover:text-white transition-colors">contactmeMECL501@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mecl-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MECL - Mutuelle d'épargne et de crédit likelemba. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
