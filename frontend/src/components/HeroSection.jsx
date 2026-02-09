Voici le fichier HeroSection.jsx simplifié et propre :

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Users, Globe, Scale } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const valeurs = [
    { icon: Heart, label: "Humanisme", description: "L humain au coeur de tout" },
    { icon: Users, label: "Inclusion", description: "L insertion sans barrieres" },
    { icon: Globe, label: "Impact social", description: "Transformer durablement" },
    { icon: Scale, label: "Ethique", description: "Integrite et transparence" }
  ];

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a55]/95 via-[#0b2a55]/90 to-[#1a4280]/85"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">Association d interet general</span>
        </div>
        <div className="mb-6 flex justify-center">
          <div className="inline-block">
            <img src="https://customer-assets.emergentagent.com/job_d3bc6ef5-a9cd-4c9e-82cd-f8d680b06566/artifacts/ahmzyvay_LOGOS%202%20%281%29.png" alt="Alt et Act" className="h-12 md:h-14 lg:h-16 w-auto" />
            <p className="text-sm italic text-blue-100 mt-1 text-right">Alterite et Action</p>
          </div>
        </div>
        <p className="text-2xl md:text-3xl text-blue-100 mb-8">Des trajectoires professionnelles sans barrieres</p>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Une ethique tournee vers l avenir</h3>
            <div className="text-blue-100 text-sm md:text-base leading-relaxed space-y-3 text-left">
              <p>Dans un monde en quete de reperes, l ethique n est plus un simple cadre de conformite : elle devient une force d orientation. ALT et ACT s inscrit dans cette perspective en faisant le choix d une <strong className="text-white">ethique vivante</strong> qui eclaire les decisions, structure les pratiques et soutient les transformations durables.</p>
              <p>Etre en avance aujourd hui, c est savoir placer l humain au coeur des evolutions economiques et sociales. Nous considerons que la <strong className="text-white">confiance, l equite et la reconnaissance des capacites</strong> constituent les fondements d une societe capable de traverser la complexite sans renoncer a sa cohesion.</p>
              <p className="italic text-blue-200">Car les organisations qui compteront demain seront celles qui auront su faire de l ethique non pas une contrainte, mais une boussole.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button onClick={() => navigate('/notre-mission')} size="lg" className="bg-white text-[#0b2a55] hover:bg-blue-50 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200 shadow-xl">
            Decouvrir notre mission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button onClick={() => scrollToSection('#contact')} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0b2a55] text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200">
            Nous contacter
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {valeurs.map((valeur, index) => {
            const Icon = valeur.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-2">{valeur.label}</div>
                <div className="text-blue-200 text-sm font-medium">{valeur.description}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
