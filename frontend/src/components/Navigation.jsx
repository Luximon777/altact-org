import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, FileText, Quote, UserCircle, Heart, Building, User, Mail, UserPlus, Target, Eye, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(function() {
    var handleScroll = function() {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var goToPage = function(e, path) { 
    e.preventDefault(); 
    setIsMobileMenuOpen(false); 
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  var goToHome = function(e) {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <nav className={isScrolled ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg shadow-lg' : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <a href="/" onClick={goToHome} className="flex items-center">
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Alt and Act" className="h-8 w-auto" />
            </a>

            <div className="hidden md:flex items-center space-x-6">
              
              {/* Présentation */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base flex items-center gap-1 py-4">
                  Présentation
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Découvrir ALT&ACT</p>
                    </div>
                    <div className="p-2">
                      <a href="/vision-methode" onClick={function(e) { goToPage(e, '/vision-methode'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0b2a55]/10 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center"><FileText className="w-5 h-5 text-[#0b2a55]" /></div>
                        <div><p className="font-semibold">Vision et méthode</p><p className="text-xs text-gray-500">Notre approche</p></div>
                      </a>
                      <a href="/mot-president" onClick={function(e) { goToPage(e, '/mot-president'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center"><Quote className="w-5 h-5 text-orange-600" /></div>
                        <div><p className="font-semibold">Le mot du fondateur</p><p className="text-xs text-gray-500">Vision et engagement</p></div>
                      </a>
                      <a href="/membres" onClick={function(e) { goToPage(e, '/membres'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center"><UserCircle className="w-5 h-5 text-teal-600" /></div>
                        <div><p className="font-semibold">Nos membres</p><p className="text-xs text-gray-500">Équipe et structure</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base flex items-center gap-1 py-4">
                  Mission
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3">
                      <p className="text-white text-sm font-medium">Notre raison d etre</p>
                    </div>
                    <div className="p-2">
                      <a href="/notre-mission" onClick={function(e) { goToPage(e, '/notre-mission'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center"><Target className="w-5 h-5 text-amber-600" /></div>
                        <div><p className="font-semibold">Notre mission</p><p className="text-xs text-gray-500">Révéler et structurer</p></div>
                      </a>
                      <a href="/notre-ambition" onClick={function(e) { goToPage(e, '/notre-ambition'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center"><Eye className="w-5 h-5 text-blue-600" /></div>
                        <div><p className="font-semibold">Notre ambition</p><p className="text-xs text-gray-500">Le travail comme service</p></div>
                      </a>
                      <a href="/notre-action" onClick={function(e) { goToPage(e, '/notre-action'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center"><Zap className="w-5 h-5 text-green-600" /></div>
                        <div><p className="font-semibold">Notre action</p><p className="text-xs text-gray-500">Accompagner les transformations</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charte éthique */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base flex items-center gap-1 py-4">
                  Charte éthique
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-3">
                      <p className="text-white text-sm font-medium">Nos engagements</p>
                    </div>
                    <div className="p-2">
                      <a href="/charte-ethique" onClick={function(e) { goToPage(e, '/charte-ethique'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-rose-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center"><Heart className="w-5 h-5 text-rose-600" /></div>
                        <div><p className="font-semibold">Charte éthique</p><p className="text-xs text-gray-500">10 principes fondateurs</p></div>
                      </a>
                      <a href="/gouvernance-consultative" onClick={function(e) { goToPage(e, '/gouvernance-consultative'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center"><Users className="w-5 h-5 text-indigo-600" /></div>
                        <div><p className="font-semibold">Gouvernance consultative</p><p className="text-xs text-gray-500">Notre mode de décision</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vos accès */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base flex items-center gap-1 py-4">
                  Vos accès
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3">
                      <p className="text-white text-sm font-medium">Votre espace dédié</p>
                    </div>
                    <div className="p-2">
                      <a href="/conseils-accompagnement" onClick={function(e) { goToPage(e, '/conseils-accompagnement'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center"><Building className="w-5 h-5 text-teal-600" /></div>
                        <div><p className="font-semibold">Espace Employeurs</p><p className="text-xs text-gray-500">Conseils et accompagnement</p></div>
                      </a>
                      <a href="/espace-personnel" onClick={function(e) { goToPage(e, '/espace-personnel'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center"><User className="w-5 h-5 text-orange-600" /></div>
                        <div><p className="font-semibold">Espace Personnel</p><p className="text-xs text-gray-500">Votre parcours</p></div>
                      </a>
                      <a href="/espace-ubuntoo" onClick={function(e) { goToPage(e, '/espace-ubuntoo'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center"><Users className="w-5 h-5 text-cyan-600" /></div>
                        <div><p className="font-semibold">Espace Ubuntoo</p><p className="text-xs text-gray-500">Communauté apprenante</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="relative group">
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-base flex items-center gap-1 py-4">
                  Contact
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-3">
                      <p className="text-white text-sm font-medium">Nous rejoindre</p>
                    </div>
                    <div className="p-2">
                      <a href="/contact" onClick={function(e) { goToPage(e, '/contact'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center"><Mail className="w-5 h-5 text-blue-600" /></div>
                        <div><p className="font-semibold">Contact</p><p className="text-xs text-gray-500">Nous écrire</p></div>
                      </a>
                      <a href="/devenir-membre" onClick={function(e) { goToPage(e, '/devenir-membre'); }} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center"><UserPlus className="w-5 h-5 text-green-600" /></div>
                        <div><p className="font-semibold">Devenir membre</p><p className="text-xs text-gray-500">Rejoindre ALT&ACT</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <button onClick={function() { setIsMobileMenuOpen(!isMobileMenuOpen); }} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0b2a55]" /> : <Menu className="w-6 h-6 text-[#0b2a55]" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={function() { setIsMobileMenuOpen(false); }}>
          <div className="fixed top-20 right-0 bottom-0 w-72 bg-white shadow-2xl overflow-y-auto" onClick={function(e) { e.stopPropagation(); }}>
            <div className="flex flex-col p-6 space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Présentation</p>
              <a href="/vision-methode" onClick={function(e) { goToPage(e, '/vision-methode'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><FileText className="w-5 h-5 text-[#0b2a55]" /><span>Vision et méthode</span></a>
              <a href="/mot-president" onClick={function(e) { goToPage(e, '/mot-president'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Quote className="w-5 h-5 text-orange-600" /><span>Le mot du fondateur</span></a>
              <a href="/membres" onClick={function(e) { goToPage(e, '/membres'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><UserCircle className="w-5 h-5 text-teal-600" /><span>Nos membres</span></a>
              
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Mission</p>
              <a href="/notre-mission" onClick={function(e) { goToPage(e, '/notre-mission'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Target className="w-5 h-5 text-amber-600" /><span>Notre mission</span></a>
              <a href="/notre-ambition" onClick={function(e) { goToPage(e, '/notre-ambition'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Eye className="w-5 h-5 text-blue-600" /><span>Notre ambition</span></a>
              <a href="/notre-action" onClick={function(e) { goToPage(e, '/notre-action'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Zap className="w-5 h-5 text-green-600" /><span>Notre action</span></a>
              
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Charte éthique</p>
              <a href="/charte-ethique" onClick={function(e) { goToPage(e, '/charte-ethique'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Heart className="w-5 h-5 text-rose-600" /><span>Charte éthique</span></a>
              <a href="/gouvernance-consultative" onClick={function(e) { goToPage(e, '/gouvernance-consultative'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Users className="w-5 h-5 text-indigo-600" /><span>Gouvernance consultative</span></a>
              
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Vos accès</p>
              <a href="/conseils-accompagnement" onClick={function(e) { goToPage(e, '/conseils-accompagnement'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Building className="w-5 h-5 text-teal-600" /><span>Espace Employeurs</span></a>
              <a href="/espace-personnel" onClick={function(e) { goToPage(e, '/espace-personnel'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><User className="w-5 h-5 text-orange-600" /><span>Espace Personnel</span></a>
              <a href="/espace-ubuntoo" onClick={function(e) { goToPage(e, '/espace-ubuntoo'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Users className="w-5 h-5 text-cyan-600" /><span>Espace Ubuntoo</span></a>
              
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">Contact</p>
              <a href="/contact" onClick={function(e) { goToPage(e, '/contact'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><Mail className="w-5 h-5 text-blue-600" /><span>Contact</span></a>
              <a href="/devenir-membre" onClick={function(e) { goToPage(e, '/devenir-membre'); }} className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100"><UserPlus className="w-5 h-5 text-green-600" /><span>Devenir membre</span></a>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Navigation;
