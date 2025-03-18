
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import MembershipSection from '@/components/MembershipSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Pour l'animation de comptage des chiffres
  useEffect(() => {
    const countElements = document.querySelectorAll('.animate-count');
    
    const animateCount = (el: Element) => {
      const target = parseInt(el.textContent || '0', 10);
      let count = 0;
      const duration = 2000; // 2 secondes
      const frameRate = 1000 / 60; // 60 fps
      const totalFrames = duration / frameRate;
      const increment = target / totalFrames;
      
      const counter = setInterval(() => {
        count += increment;
        if (count >= target) {
          el.textContent = `${target}`;
          clearInterval(counter);
        } else {
          el.textContent = `${Math.ceil(count)}`;
        }
      }, frameRate);
    };
    
    // Pour scroll reveal animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8) {
          el.classList.add('revealed');
          
          // Animer les compteurs lorsqu'ils apparaissent
          if (el.querySelectorAll('.animate-count').length > 0) {
            el.querySelectorAll('.animate-count').forEach(animateCount);
          }
        }
      });
      
      // Animer les compteurs dans la section hero dès le chargement
      if (countElements.length > 0 && window.scrollY < 100) {
        countElements.forEach(animateCount);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PrinciplesSection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
