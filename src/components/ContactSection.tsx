
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-mecl-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-mecl-600 font-medium mb-3">Contactez-nous</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Restons en contact</h2>
          <p className="text-gray-700">
            Pour toute question ou information, n'hésitez pas à nous contacter. Notre équipe est à votre disposition.
          </p>
          <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 animate-fade-in-left">
            <div className="glass-panel rounded-2xl p-8 space-y-6 bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 className="text-2xl font-semibold text-center text-mecl-800">Informations de contact</h3>
              <ul className="space-y-6">
                <li className="flex items-start p-4 bg-mecl-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-mecl-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-800">
                    N° 67 Rue Loudima croisement Boueta-Mbongo Moungali Q41 arrêt de bus Janne vialle Brazzaville
                  </span>
                </li>
                <li className="flex items-center p-4 bg-mecl-50 rounded-lg">
                  <Phone className="h-6 w-6 text-mecl-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-800">(+242) 06 940-43-09 / 06 607 19 04 / 06 686 28 41</span>
                </li>
                <li className="flex items-center p-4 bg-mecl-50 rounded-lg">
                  <Mail className="h-6 w-6 text-mecl-600 mr-4 flex-shrink-0" />
                  <a href="mailto:contactmecl24@gmail.com" className="text-gray-800 hover:text-mecl-700 transition-colors">
                    contactmecl24@gmail.com
                  </a>
                </li>
                <li className="flex items-center p-4 bg-mecl-50 rounded-lg">
                  <Facebook className="h-6 w-6 text-mecl-600 mr-4 flex-shrink-0" />
                  <a 
                    href="https://www.facebook.com/profile.php?id=61559962310244" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-mecl-700 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 space-y-6 bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 className="text-2xl font-semibold text-center text-mecl-800">Heures d'ouverture</h3>
              <div className="space-y-4">
                <div className="flex justify-between p-3 bg-mecl-50 rounded-lg">
                  <span className="font-medium">Lundi - Vendredi:</span>
                  <span>8h00 - 16h00</span>
                </div>
                <div className="flex justify-between p-3 bg-mecl-50 rounded-lg">
                  <span className="font-medium">Samedi:</span>
                  <span>9h00 - 13h00</span>
                </div>
                <div className="flex justify-between p-3 bg-mecl-50 rounded-lg">
                  <span className="font-medium">Dimanche:</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
