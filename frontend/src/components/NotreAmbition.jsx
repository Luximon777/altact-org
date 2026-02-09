import React, { useState, useEffect } from 'react';
import { Globe, Heart, Users, ArrowRight, Sparkles, Scale, Leaf, Building, HandHeart, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const NotreAmbition = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('ambition');

  const memoItems = [
    { id: 'ambition', title: 'Notre ambition', summary: 'Une societe plus juste et durable', icon: Star, color: 'bg-blue-500' },
    { id: 'travail', title: 'Le travail reinvente', summary: 'Contribution, dignite, progres partage', icon: HandHeart, color: 'bg-amber-500' },
    { id: 'organisations', title: 'Organisations transformees', summary: 'Performance et responsabilite', icon: Building, color: 'bg-gray-700' },
    { id: 'citation', title: 'Notre conviction', summary: 'Faire grandir personnes et projets', icon: Sparkles, color: 'bg-teal-500' },
    { id: 'inclusive', title: 'Societe inclusive', summary: 'Chacun trouve sa place', icon: Users, color: 'bg-green-500' },
    { id: 'europe', title: 'Vision europeenne', summary: 'Economie sociale et solidaire', icon: Globe, color: 'bg-indigo-500' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = memoItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(memoItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-semibold">NOTRE AMBITION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Une societe plus juste et durable
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ou le developpement humain devient le fondement des dynamiques professionnelles et sociales.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            <aside className="hidden lg:block lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-5 py-4">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      En resume
                    </h3>
                    <p className="text-blue-100 text-sm mt-1">Les points cles de notre ambition</p>
                  </div>
                  
                  <div className="p-3">
                    {memoItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 group ${
                            isActive 
                              ? 'bg-blue-50 border-l-4 border-blue-500' 
                              : 'hover:bg-gray-50 border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${
                              isActive ? 'scale-110' : 'group-hover:scale-105'
                            } transition-transform duration-200`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-800'}`}>
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                {item.summary}
                              </p>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                              isActive ? 'translate-x-1 text-blue-500' : ''
                            }`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="px-5 pb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        Faire grandir les personnes autant que les projets.
                      </p>
                      <p className="text-xs text-blue-700 mt-2 font-medium">- Notre ambition</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <main className="flex-1 min-w-0 space-y-12">
          
              <div id="ambition" className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Notre ambition
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nous oeuvrons a l emergence d une societe plus juste et durable, ou le <strong className="text-blue-700">developpement humain devient le fondement</strong> des dynamiques professionnelles et sociales.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dans cette societe, le travail depasse la seule logique de production pour devenir un <strong className="text-blue-700">lieu de contribution, de dignite et de progres partage</strong>.
                </p>
              </div>

              <div id="travail">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-gray-900">Le travail reinvente</h3>
                  <p className="text-gray-600 mt-2">Une nouvelle conception du rapport au travail</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HandHeart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Contribution</h4>
                    <p className="text-gray-600">
                      Le travail comme acte de service a la communaute, au-dela de la simple production
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Dignite</h4>
                    <p className="text-gray-600">
                      La reconnaissance de la valeur intrinseque de chaque personne et de son apport
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Progres partage</h4>
                    <p className="text-gray-600">
                      Une avancee collective ou chacun beneficie des fruits du developpement
                    </p>
                  </div>
                </div>
              </div>

              <div id="organisations" className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                  <Building className="w-12 h-12 text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Des organisations transformees</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Les organisations y sont appelees a <strong className="text-white">concilier performance et responsabilite</strong>, tandis que les parcours professionnels se construisent dans une perspective d apprentissage tout au long de la vie.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Cette transformation passe par des pratiques manageriales renouvelees, une attention accrue au bien-etre et une culture de la reconnaissance.
                  </p>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-500">
                      <h4 className="font-bold text-gray-900 mb-2">Performance responsable</h4>
                      <p className="text-gray-600 text-sm">Conjuguer efficacite economique et impact social positif</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                      <h4 className="font-bold text-gray-900 mb-2">Apprentissage continu</h4>
                      <p className="text-gray-600 text-sm">Parcours professionnels evolutifs et formateurs</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                      <h4 className="font-bold text-gray-900 mb-2">Environnements capacitants</h4>
                      <p className="text-gray-600 text-sm">Espaces qui font grandir autant les personnes que les projets</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="citation" className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-amber-300" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  Nous croyons qu un avenir soutenable repose sur des environnements capables de faire grandir les personnes autant que les projets.
                </blockquote>
                <p className="text-blue-200">
                  Lorsque les capacites humaines sont reconnues et mises en mouvement, elles favorisent la confiance, renforcent la cooperation et ouvrent la voie a des modeles economiques et sociaux plus equilibres.
                </p>
              </div>

              <div id="inclusive">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-gray-900">Une societe inclusive</h3>
                  <p className="text-gray-600 mt-2">Ou chacun peut trouver sa place et exercer sa responsabilite</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Globe className="w-10 h-10 text-teal-600 mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Trouver sa place</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Ainsi se dessine une societe ou chacun peut trouver sa place, exercer sa responsabilite et contribuer, a son niveau, a la construction d un monde plus solidaire.
                      </p>
                    </div>
                    <div>
                      <Scale className="w-10 h-10 text-blue-600 mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Equite et participation</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Une societe qui progresse lorsque chacun peut non seulement acceder aux opportunites, mais aussi prendre part a ce qu elles rendent possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="europe" className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-amber-400" />
                  <h3 className="text-2xl font-bold">En coherence avec la vision europeenne</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  Notre ambition s inscrit dans la continuite des orientations europeennes pour une economie sociale et solidaire, une transition juste et un developpement durable.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <Leaf className="w-6 h-6 text-green-400 mb-2" />
                    <p className="text-sm text-blue-100">Pacte vert europeen</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Users className="w-6 h-6 text-amber-400 mb-2" />
                    <p className="text-sm text-blue-100">Socle europeen des droits sociaux</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Heart className="w-6 h-6 text-rose-400 mb-2" />
                    <p className="text-sm text-blue-100">Objectifs de developpement durable</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigate('/notre-action')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
                  >
                    Decouvrir notre action
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    onClick={() => navigate('/notre-mission')}
                    variant="outline"
                    className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full"
                  >
                    Revenir a notre mission
                  </Button>
                </div>
              </div>
            </main>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreAmbition;
