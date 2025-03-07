
import { useState, useEffect, useRef } from 'react';
import { Users, VoteIcon, DollarSign, Shield, BookOpen, Handshake, Heart } from 'lucide-react';

const PrinciplesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const principles = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Adhésion volontaire et ouverte à tous",
      description: "Les coopératives sont des organisations fondées sur le volontariat, ouvertes à toutes les personnes aptes à utiliser leurs services."
    },
    {
      icon: <VoteIcon className="h-6 w-6" />,
      title: "Pouvoir démocratique exercé par les membres",
      description: "Un membre, une voix. Les membres participent activement à l'établissement des politiques et à la prise de décisions."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Participation économique des membres",
      description: "Les membres contribuent équitablement au capital de leur coopérative et en gardent le contrôle."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Autonomie et indépendance",
      description: "La MECL est une organisation autonome d'entraide, contrôlée par ses membres."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Éducation, formation et information",
      description: "Nous offrons à nos membres, dirigeants et employés l'éducation et la formation requises pour leur participation efficace."
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Coopération entre les coopératives",
      description: "Nous servons nos membres et renforçons le mouvement coopératif par la collaboration."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Engagement envers la communauté",
      description: "La MECL travaille au développement durable de sa communauté à travers des politiques approuvées par ses membres."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-mecl-600 font-medium mb-3">Nos fondements</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Principes coopératifs</h2>
          <p className="text-gray-700">
            En tant que coopérative, la MECL est fondée sur des principes qui guident toutes nos actions et services.
          </p>
          <div className="w-20 h-1 bg-mecl-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className={`glass-panel rounded-xl p-6 card-hover ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 bg-mecl-100 text-mecl-600 rounded-full flex items-center justify-center mb-4">
                {principle.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{principle.title}</h4>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
