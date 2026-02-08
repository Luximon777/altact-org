Je vous donne les deux fichiers complets à copier :

---

## 📄 Fichier 1 : `ActionsSection.jsx`
**Emplacement :** `frontend/src/components/ActionsSection.jsx`

```jsx
import React from 'react';
import { Users, ArrowRight, Compass, Heart, Building, Globe, Sparkles, X, Check } from 'lucide-react';
import { Card } from './ui/card';

const ActionsSection = () => {
  const actionsData = [
    {
      public: "Personnes en recherche d'emploi",
      title: "Devenir auteur de sa trajectoire",
      before: "Orienter et prescrire",
      after: "Éveiller et révéler",
      description: "Nous ne cherchons pas à insérer une personne dans un système. Nous l'accompagnons à découvrir sa capacité unique de contribution et à devenir suffisamment solide pour prendre part au monde.",
      icon: Compass,
      color: "from-[#0b2a55] to-[#1a4280]"
    },
    {
      public: "Personnes en transition",
      title: "Traverser sans perdre sa direction",
      before: "Sécuriser un parcours",
      after: "Structurer la personne",
      description: "Les transitions ne se traversent pas avec des outils, mais avec une solidité intérieure. Nous développons la maturité qui permet d'affronter l'incertitude avec autonomie et sens.",
      icon: ArrowRight,
      color: "from-orange-500 to-amber-500"
    },
    {
      public: "Personnes en situation de handicap",
      title: "Talents à valoriser",
      before: "Compenser des limites",
      after: "Révéler des ressources",
      description: "Là où d'autres voient des limites, nous reconnaissons des compétences, des talents et des atouts à valoriser dans une dynamique de participation pleine et entière.",
      icon: Heart,
      color: "from-rose-500 to-pink-500"
    },
    {
      public: "Entreprises et Organisations",
      title: "Espaces de contribution",
      before: "Inclusion par obligation",
      after: "Transformation par conviction",
      description: "Nous accompagnons les organisations à devenir des lieux où chacun peut apporter sa valeur unique — pas seulement des structures qui intègrent, mais des espaces qui font grandir.",
      icon: Building,
      color: "from-teal-500 to-emerald-500"
    },
    {
      public: "Territoires et Partenaires",
      title: "Architectes du développement humain",
      before: "Coordonner des dispositifs",
      after: "Créer des écosystèmes de maturation",
      description: "Nous bâtissons avec les acteurs locaux des espaces capables de redonner du sens, de soutenir la responsabilité et de former des adultes capables de contribuer.",
      icon: Globe,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="actions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-sm font-semibold">NOS ENGAGEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Un changement de paradigme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous ne cherchons pas à insérer des personnes dans un système existant — nous les accompagnons à devenir suffisamment solides pour y contribuer et parfois, pour participer à son évolution.
          </p>
        </div>

        {/* Paradigm shift banner */}
        <div className="mb-16 p-6 md:p-8 bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl text-white text-center">
          <p className="text-lg md:text-xl font-medium mb-4">
            De l'insertion à la contribution
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-blue-200">
              <X className="w-5 h-5 text-red-400" />
              <span>Former — Adapter — Placer</span>
            </div>
            <ArrowRight className="w-6 h-6 text-orange-400 hidden md:block" />
            <div className="flex items-center gap-2 text-white font-semibold">
              <Check className="w-5 h-5 text-green-400" />
              <span>Éveiller — Structurer — Contribuer</span>
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionsData.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${action.color} p-5`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">{action.public}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {action.title}
                  </h3>

                  {/* Paradigm shift contrast */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-xl space-y-2">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm line-through">{action.before}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm font-semibold">{action.after}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {action.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-orange-100 max-w-3xl">
            <p className="text-xl text-gray-800 italic leading-relaxed mb-4">
              "Accompagner ne consiste pas à intégrer une personne dans un système, mais à l'aider à devenir suffisamment structurée pour contribuer à son évolution."
            </p>
            <p className="text-orange-600 font-semibold">— Notre conviction</p>
          </div>
        </div>

        {/* CTA sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Lien vers Conseils et Accompagnement */}
          <div className="p-8 bg-gradient-to-r from-[#0b2a55]/5 to-orange-50 rounded-2xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Vous êtes une entreprise ?
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez comment transformer votre organisation en espace de contribution
            </p>
            <a 
              href="#/conseils-accompagnement" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact CTA */}
          <div className="p-8 bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-2xl border border-[#0b2a55]/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Besoin d'accompagnement ?
            </h3>
            <p className="text-gray-600 mb-6">
              Échangeons sur votre parcours et vos aspirations
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b2a55] text-white rounded-lg font-semibold hover:bg-[#1a4280] transition-colors duration-200">
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
```

---

## 📄 Fichier 2 : `ConseilsAccompagnement.jsx`
**Emplacement :** `frontend/src/components/ConseilsAccompagnement.jsx`

```jsx
import React, { useEffect } from 'react';
import { ArrowLeft, Route, Heart, Users, Target, Handshake, Sparkles, Building, Shield, TrendingUp, UserCheck, MessageCircle, Leaf, Award, CheckCircle, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const ConseilsAccompagnement = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const services = [
    {
      id: 1,
      title: "Ingénierie de parcours et transitions professionnelles",
      subtitle: "Facilitateur de mobilités internes et externes",
      icon: Route,
      color: "teal",
      description: "ALT&ACT accompagne les organisations et les individus dans la construction de parcours professionnels sécurisés, en plaçant le bien-être et l'épanouissement au cœur de chaque transition.",
      interventions: [
        "Construction de parcours de reconversion adaptés aux aspirations individuelles",
        "Sécurisation des transitions (inaptitude, usure professionnelle, réorganisation)",
        "Appui aux politiques RH inclusives et bienveillantes",
        "Mise en place de PMSMP ou immersions professionnelles"
      ],
      benefice: "Conserver les talents ou accompagner les sorties de manière responsable et humaine",
      beneficeIcon: UserCheck
    },
    {
      id: 2,
      title: "Appui aux politiques RSE et marque employeur",
      subtitle: "Partenaire stratégique de votre engagement sociétal",
      icon: Leaf,
      color: "green",
      description: "Une dimension structurante dans nos orientations humanistes et européennes. ALT&ACT vous accompagne dans la construction d'une entreprise plus inclusive et attractive.",
      interventions: [
        "Participation active à une économie plus inclusive",
        "Intégration réussie de publics éloignés de l'emploi",
        "Valorisation de vos pratiques éthiques et responsables",
        "Renforcement de votre attractivité employeur"
      ],
      benefice: "Devenir un partenaire stratégique, pas seulement opérationnel",
      beneficeIcon: Award
    },
    {
      id: 3,
      title: "Conseil en posture managériale et environnements de travail",
      subtitle: "Pour des équipes épanouies et engagées",
      icon: Heart,
      color: "rose",
      description: "En cohérence avec notre approche centrée sur les valeurs, les vertus et les soft skills, nous accompagnons les dirigeants et managers vers des pratiques favorisant le bien-être au travail.",
      interventions: [
        "Sensibilisation aux facteurs d'engagement et de motivation",
        "Prévention des ruptures de parcours et du désengagement",
        "Lecture fine des dynamiques humaines au travail",
        "Aide à la création d'environnements compatibles avec les profils recrutés"
      ],
      benefice: "Stabilité des équipes et climat social plus robuste",
      beneficeIcon: Shield
    },
    {
      id: 4,
      title: "Interface entre entreprises et partenaires sociaux",
      subtitle: "Tiers de confiance territorial",
      icon: Handshake,
      color: "amber",
      description: "ALT&ACT joue un rôle de facilitateur entre le monde économique et les acteurs de l'emploi, créant des ponts durables au service de l'insertion et du développement territorial.",
      interventions: [
        "Traduction des besoins économiques en opportunités d'insertion",
        "Fluidification de la relation avec les acteurs publics de l'emploi",
        "Facilitation des coopérations locales structurées",
        "Création de synergies territoriales durables"
      ],
      benefice: "Des partenariats solides au service de l'emploi local",
      beneficeIcon: Building
    }
  ];

  const colorClasses = {
    teal: { bg: "bg-teal-500", light: "bg-teal-100", text: "text-teal-700", border: "border-teal-200" },
    green: { bg: "bg-green-500", light: "bg-green-100", text: "text-green-700", border: "border-green-200" },
    rose: { bg: "bg-rose-500", light: "bg-rose-100", text: "text-rose-700", border: "border-rose-200" },
    amber: { bg: "bg-amber-500", light: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] text-white py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1764391801025-9cee2194f564?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZSUyMHBlb3BsZSUyMGRpc2N1c3NpbmclMjB0YWJsZSUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NzA1Njc1MjF8MA&ixlib=rb-4.1.0&q=85" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={handleBackHome} 
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-orange-500/20 text-orange-200 border-orange-400/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Services ALT&ACT
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conseils & Accompagnement
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Des solutions sur mesure pour le <strong className="text-white">bien-être au travail</strong>, 
            au service des salariés comme des dirigeants. Une approche humaniste 
            pour des organisations plus épanouissantes et performantes.
          </p>
          
          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: "4", label: "Domaines d'expertise" },
              { value: "360°", label: "Approche globale" },
              { value: "100%", label: "Sur mesure" },
              { value: "∞", label: "Engagement humain" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre philosophie</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chez ALT&ACT, nous croyons que le <strong>bien-être au travail</strong> n'est pas un luxe, 
                mais une condition essentielle de la performance durable. Nos services s'adressent autant 
                aux <strong>salariés</strong> en quête de sens qu'aux <strong>dirigeants</strong> soucieux 
                de créer des environnements de travail épanouissants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre approche conjugue expertise technique et sensibilité humaine, pour des accompagnements 
                qui transforment durablement les organisations et les parcours professionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos domaines d'intervention</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quatre axes stratégiques pour accompagner votre organisation vers plus de bien-être et de performance
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const BeneficeIcon = service.beneficeIcon;
            const colors = colorClasses[service.color];
            
            return (
              <Card key={service.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    {/* Left panel - Title */}
                    <div className={`${colors.bg} p-8 text-white flex flex-col justify-center`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-medium opacity-80 mb-2">Service {service.id}</span>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-sm opacity-90">{service.subtitle}</p>
                    </div>
                    
                    {/* Right panel - Content */}
                    <div className="md:col-span-2 p-8">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          Interventions possibles
                        </h4>
                        <ul className="space-y-3">
                          {service.interventions.map((intervention, iidx) => (
                            <li key={iidx} className="flex items-start gap-3">
                              <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <span className="text-gray-700">{intervention}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefice */}
                      <div className={`${colors.light} rounded-xl p-4 flex items-center gap-4`}>
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                          <BeneficeIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase">Bénéfice clé</p>
                          <p className={`font-medium ${colors.text}`}>{service.benefice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour échanger sur vos besoins et découvrir comment 
            ALT&ACT peut vous accompagner vers plus de bien-être et de performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBackHome}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Nous contacter
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/charte-ethique')}
              className="border-white text-white hover:bg-white hover:text-[#0b2a55] px-8 py-6 text-lg"
            >
              Découvrir notre charte éthique
            </Button>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qui nous distingue</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Humanisme", desc: "L'humain au centre de chaque décision" },
            { icon: Target, title: "Sur mesure", desc: "Des solutions adaptées à vos réalités" },
            { icon: Shield, title: "Éthique", desc: "Des pratiques irréprochables" },
            { icon: TrendingUp, title: "Impact", desc: "Des résultats mesurables et durables" }
          ].map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0b2a55] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          <span className="text-gray-500 text-sm">
            Association ALT&ACT — Altérité & Action
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConseilsAccompagnement;
```

---

## 📋 Instructions

1. **Copiez le fichier 1** → Collez dans `frontend/src/components/ActionsSection.jsx`
2. **Copiez le fichier 2** → Collez dans `frontend/src/components/ConseilsAccompagnement.jsx`
3. **Commit** les deux fichiers
4. **Attendez** le build vert ✅
5. **Testez** en fenêtre privée
