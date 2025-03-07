import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuration EmailJS
      const serviceID = 'default_service'; // Remplacer par votre Service ID d'EmailJS
      const templateID = 'template_contact'; // Remplacer par votre Template ID d'EmailJS
      const userID = 'user_yourUserID'; // Remplacer par votre User ID d'EmailJS
      
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'contactmecl24@gmail.com'
      };
      
      // Envoyer l'email
      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      // Afficher un toast de succès
      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès à contactmecl24@gmail.com",
        variant: "default",
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast({
        title: "Échec de l'envoi",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-in-left">
            <div className="glass-panel rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Informations de contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-mecl-600 mr-3 mt-1" />
                  <span>
                    N° 67 Rue Loudima croisement Boueta-Mbongo Moungali Q41 arrêt de bus Janne vialle Brazzaville
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-mecl-600 mr-3" />
                  <span>(+242) 06 940-43-09 / 06 607 19 04 / 06 686 28 41</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-mecl-600 mr-3" />
                  <a href="mailto:contactmecl24@gmail.com" className="hover:text-mecl-700 transition-colors">
                    contactmecl24@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Facebook className="h-5 w-5 text-mecl-600 mr-3" />
                  <a 
                    href="https://www.facebook.com/profile.php?id=61559962310244" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-mecl-700 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Heures d'ouverture</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi:</span>
                  <span>8h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Samedi:</span>
                  <span>9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimanche:</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className="w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro de téléphone"
                  className="w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  className="w-full min-h-[120px]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-mecl-600 hover:bg-mecl-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
