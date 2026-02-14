import React, { useEffect, useMemo, useState } from 'react';
import {
  User, Shield, Heart, Compass, Scale, Brain, CheckCircle, Sparkles, MessageCircle,
  FileText, Users, AlertTriangle, Handshake, Eye, ChevronRight, Phone, ArrowRight,
  Lock, BookOpen, HeartHandshake, Briefcase, ShieldCheck, UserCheck, Network
} from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';
import Footer from './Footer';

const EspacePersonnel = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('positionnement');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Stabilisé : memoItems ne change plus à chaque render
  const memoItems = useMemo(() => ([
    { id: 'positionnement', title: 'Notre positionnement', summary: 'Tiers de confiance spécialisé', icon: Shield, color: 'bg-blue-500' },
    { id: 'droits', title: 'Droits et devoirs', summary: 'Information et conseil', icon: FileText, color: 'bg-amber-500' },
    { id: 'protection', title: 'Protection sociale', summary: 'Sécurisation des parcours', icon: ShieldCheck, color: 'bg-green-500' },
    { id: 'rupture', title: 'Situations de rupture', summary: 'Accompagnement personnalisé', icon: AlertTriangle, color: 'bg-rose-500' },
    { id: 'prevention', title: 'Prévention des risques', summary: 'Agir avant la rupture', icon: Eye, color: 'bg-purple-500' },
    { id: 'soutien', title: 'Soutien psychologique', summary: 'Écoute et stabilisation', icon: Heart, color: 'bg-teal-500' },
    { id: 'role', title: 'Notre rôle', summary: 'Dans l\'écosystème', icon: Network, color: 'bg-indigo-500' },
  ]), []);

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
  }, [memoItems]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
            alt="Accompagnement professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a55]/95 via-[#1a4280]/90 to-[#0b2a55]/95"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <User className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200 text-sm font-semibold">ESPACE PERSONNEL</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Protéger votre trajectoire professionnelle
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Un <strong className="text-white">tiers de confiance</strong> spécialisé dans la sécurisation de vos situations professionnelles et la préservation de votre équilibre.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Lock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-sm text-blue-200">100% Confidentiel</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-blue-200">Protection garantie</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <HeartHandshake className="w-6 h-6 text-rose-400 mx-auto mb-2" />
              <p className="text-sm text-blue-200">Écoute bienveillante</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <UserCheck className="w-6 h-6 text-teal-400 mx-auto mb-2" />
              <p className="text-sm text-blue-200">Sans jugement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Mémo */}
            <aside className="hidden lg:block lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-5 py-4">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Nos services
                    </h3>
                    <p className="text-blue-200 text-sm mt-1">Accompagnement personnalisé</p>
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
                            <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-800'}`}>
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {item.summary}
                              </p>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 ${isActive ? 'translate-x-1 text-blue-500' : ''}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="px-5 pb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "Vous n'êtes pas seul face aux défis professionnels."
                      </p>
                      <p className="text-xs text-blue-700 mt-2 font-medium">— Notre engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 space-y-12">

              {/* Positionnement */}
              <div id="positionnement" className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Notre positionnement</h2>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ALT&ACT intervient comme une <strong className="text-blue-700">structure d'appui, d'information et de protection</strong> des personnes engagées dans la vie professionnelle.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  L'association agit en complémentarité d'acteurs spécialisés dans l'ingénierie des parcours, en orientant lorsque nécessaire vers des dispositifs partenaires adaptés.
                </p>

                <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                  <p className="text-amber-800 text-lg leading-relaxed">
                    <strong>Notre cœur d'action :</strong> la sécurisation des situations professionnelles sensibles et la préservation de l'équilibre humain face aux transformations du travail.
                  </p>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-blue-100 text-center">
                    <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Tiers de confiance</p>
                    <p className="text-sm text-gray-600 mt-1">Indépendant et impartial</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-blue-100 text-center">
                    <Eye className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Spécialisé</p>
                    <p className="text-sm text-gray-600 mt-1">Protection des trajectoires</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-blue-100 text-center">
                    <Handshake className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Complémentaire</p>
                    <p className="text-sm text-gray-600 mt-1">En lien avec les partenaires</p>
                  </div>
                </div>
              </div>

              {/* Droits et devoirs */}
              <div id="droits" className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Information et conseil sur les droits et devoirs</h3>
                    <p className="text-gray-600">Comprendre pour mieux décider</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ALT&ACT permet aux actifs de mieux comprendre leur environnement professionnel afin de <strong>prendre des décisions éclairées</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Lecture et compréhension du contrat de travail</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Obligations réciproques employeur / salarié</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Conditions de travail et environnement</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Dispositifs de protection existants</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3 md:col-span-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Marges de recours en cas de difficulté</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-5 text-white">
                  <p className="font-semibold text-lg">
                    Objectif : réduire l'asymétrie d'information souvent défavorable aux salariés.
                  </p>
                </div>
              </div>

              {/* Protection sociale */}
              <div id="protection" className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Protection sociale et sécurisation des parcours</h3>
                    <p className="text-gray-600">Restaurer un sentiment de sécurité</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  L'association informe et oriente les personnes concernant leurs droits sociaux et les mécanismes de protection disponibles.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-green-100">
                    <h4 className="font-bold text-gray-900 mb-4">Nous vous informons sur :</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Vos droits sociaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Les mécanismes de prévoyance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Les couvertures existantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Les dispositifs mobilisables en cas de fragilisation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white flex flex-col justify-center">
                    <Shield className="w-12 h-12 text-green-200 mb-4" />
                    <p className="text-lg leading-relaxed">
                      ALT&ACT contribue à <strong>restaurer un sentiment de sécurité</strong>, facteur clé d'engagement au travail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Situations de rupture */}
              <div id="rupture" className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-l-4 border-rose-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Soutien lors des situations de rupture</h3>
                    <p className="text-gray-600">Moments à forte charge émotionnelle et décisionnelle</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  ALT&ACT intervient particulièrement dans les moments critiques de la vie professionnelle.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-rose-500" />
                      Situations concernées
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-rose-50 rounded-lg p-3 border-l-4 border-rose-400">
                        <p className="text-gray-700">Licenciement individuel</p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-3 border-l-4 border-rose-400">
                        <p className="text-gray-700">Ruptures conventionnelles</p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-3 border-l-4 border-rose-400">
                        <p className="text-gray-700">Restructurations</p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-3 border-l-4 border-rose-400">
                        <p className="text-gray-700">Plans de sauvegarde de l'emploi</p>
                      </div>
                      <div className="bg-rose-50 rounded-lg p-3 border-l-4 border-rose-400">
                        <p className="text-gray-700">Conflits professionnels</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Handshake className="w-5 h-5 text-blue-500" />
                      Notre aide
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Comprendre la situation</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Objectiver les options possibles</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Éviter les décisions précipitées</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Préparer la suite du parcours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-5 text-white">
                  <p className="font-semibold text-lg">
                    L'enjeu n'est pas uniquement juridique — il est aussi humain et projectif.
                  </p>
                </div>
              </div>

              {/* Prévention des risques */}
              <div id="prevention" className="bg-purple-50 rounded-3xl p-8 md:p-12 border border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Prévention des risques professionnels et psychosociaux</h3>
                    <p className="text-gray-600">Agir avant la rupture</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ALT&ACT développe une <strong className="text-purple-700">approche préventive</strong> visant à limiter les effets de déstabilisation liés au travail.
                </p>

                <h4 className="font-bold text-gray-900 mb-4">Vigilance portée sur :</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-purple-100 text-center">
                    <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Épuisement professionnel</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-purple-100 text-center">
                    <Compass className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Perte de sens</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-purple-100 text-center">
                    <User className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Isolement</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-purple-100 text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Tensions relationnelles</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-purple-100 text-center md:col-span-2">
                    <AlertTriangle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">Insécurité professionnelle</p>
                  </div>
                </div>

                <div className="mt-6 bg-purple-100 rounded-xl p-5">
                  <p className="text-purple-800 font-medium text-lg">
                    Cette intervention permet souvent d'agir <strong>avant la rupture</strong>.
                  </p>
                </div>
              </div>

              {/* Soutien psychologique */}
              <div id="soutien" className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-10 h-10 text-teal-200" />
                  <h3 className="text-2xl font-bold">Assistance et soutien psychologique</h3>
                </div>

                <p className="text-teal-100 text-lg leading-relaxed mb-8">
                  L'association propose un <strong className="text-white">espace d'écoute structuré, confidentiel et non jugeant</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/15 backdrop-blur rounded-xl p-5">
                    <MessageCircle className="w-6 h-6 text-teal-200 mb-3" />
                    <p className="font-semibold mb-2">Verbalisation des difficultés</p>
                    <p className="text-teal-100 text-sm">Mettre des mots sur ce que vous vivez</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur rounded-xl p-5">
                    <Shield className="w-6 h-6 text-teal-200 mb-3" />
                    <p className="font-semibold mb-2">Contenir le stress</p>
                    <p className="text-teal-100 text-sm">Limiter les effets du stress professionnel</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur rounded-xl p-5">
                    <Eye className="w-6 h-6 text-teal-200 mb-3" />
                    <p className="font-semibold mb-2">Restaurer le discernement</p>
                    <p className="text-teal-100 text-sm">Retrouver une capacité d'analyse</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur rounded-xl p-5">
                    <Compass className="w-6 h-6 text-teal-200 mb-3" />
                    <p className="font-semibold mb-2">Repositionnement constructif</p>
                    <p className="text-teal-100 text-sm">Favoriser une nouvelle dynamique</p>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur rounded-xl p-5 border border-white/30">
                  <p className="text-teal-100 italic">
                    Il ne s'agit pas d'une démarche thérapeutique, mais d'un <strong className="text-white">appui stabilisateur</strong> dans des périodes de vulnérabilité.
                  </p>
                </div>
              </div>

              {/* Rôle spécifique */}
              <div id="role" className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Network className="w-10 h-10 text-indigo-400" />
                  <h3 className="text-2xl font-bold">Rôle spécifique d'ALT&ACT dans l'écosystème</h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  ALT&ACT n'a pas vocation à se substituer aux acteurs juridiques, médicaux ou institutionnels.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/10 rounded-xl p-5 text-center">
                    <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <p className="font-semibold">Tiers de confiance</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 text-center">
                    <BookOpen className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                    <p className="font-semibold">Facilitateur de compréhension</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 text-center">
                    <Eye className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <p className="font-semibold">Acteur de prévention</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 text-center">
                    <Handshake className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <p className="font-semibold">Point d'appui</p>
                  </div>
                </div>

                <div className="bg-indigo-500/30 rounded-xl p-6 border border-indigo-400/30">
                  <p className="text-indigo-100 text-lg leading-relaxed">
                    Lorsque la situation l'exige, l'association met en relation avec les <strong className="text-white">partenaires compétents</strong>, notamment via <strong className="text-white">RE'ACTIF PRO</strong> pour les enjeux liés aux trajectoires et à l'évolution professionnelle.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                  <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un accompagnement ?</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Vous traversez une période difficile ou souhaitez anticiper une transition ? Nous sommes là pour vous écouter et vous orienter.
                  </p>
                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => navigate('/#contact')}
                      className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg rounded-full"
                    >
                      Nous contacter
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      onClick={() => navigate('/notre-action')}
                      variant="outline"
                      className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full"
                    >
                      Découvrir notre action
                    </Button>
                  </div>
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

export default EspacePersonnel;
