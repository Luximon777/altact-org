import React from 'react';
import { Heart, Handshake, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ImpactSection = () => {
  const avancees = [
    "L'activation rapide des parcours d'insertion",
    "La réduction des délais entre orientation et mise en relation avec les entreprises",
    "La reconnaissance des personnes accompagnées comme contributeurs sociétaux en transition, et non comme usagers passifs",
    "Le développement d'immersions professionnelles certifiantes favorisant l'accès à l'emploi durable",
    "L'anticipation des besoins en compétences à l'échelle territoriale"
  ];

  const ethique = [
    "La primauté de l'humain sur les outils",
    "Le respect de la dignité et de l'autonomie des personnes accompagnées",
    "L'absence de toute stigmatisation ou catégorisation discriminante",
    "La transparence des usages numériques et des dispositifs d'aide à la décision"
  ];

  const impactFinal = [
    "Sécuriser les parcours professionnels",
    "Renforcer l'estime de soi et l'identité professionnelle des personnes accompagnées",
    "Favoriser une insertion professionnelle durable et choisie",
    "Améliorer la qualité de vie au travail et la capacité de contribution à la société"
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2a55] mb-4">
            Impact sociétal
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une action d&#39;intérêt général portée par l&#39;association Alt&amp;Act
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">L&#39;association Alt&amp;Act</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              L&#39;association Alt&amp;Act agit en faveur de l&#39;insertion professionnelle durable et du bien-être au travail, en développant des actions répondant aux besoins essentiels des citoyens confrontés aux mutations du monde du travail : recherche d&#39;emploi, accès à la formation, reconversion professionnelle, sécurisation des parcours et maintien dans l&#39;emploi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Son action s&#39;adresse à tous les publics, sans distinction d&#39;âge, de niveau de qualification ou de parcours, avec une attention particulière portée aux situations de fragilisation liées aux ruptures professionnelles, aux transitions contraintes ou aux discriminations structurelles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alt&amp;Act inscrit son intervention dans une logique d&#39;intérêt général, visant à renforcer la capacité de chacun à trouver une place professionnelle choisie, utile et socialement reconnue.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Collaboration professionnelle" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Travail équipe" className="w-full h-80 object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Une collaboration structurante avec RE&#39;ACTIF PRO</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dans le cadre de ses actions, l&#39;association Alt&amp;Act s&#39;appuie sur une collaboration étroite avec la société RE&#39;ACTIF PRO, qui développe des outils et des dispositifs innovants destinés à activer concrètement les parcours d&#39;insertion et de transition professionnelle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Cette collaboration permet de combiner :</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#0b2a55] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">L&#39;expertise méthodologique et l&#39;ancrage éthique portés par Alt&amp;Act</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#0b2a55] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Les solutions opérationnelles, numériques et organisationnelles développées par RE&#39;ACTIF PRO</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              RE&#39;ACTIF PRO intervient ainsi comme outil de mise en action, complémentaire aux politiques publiques existantes, en facilitant le passage de l&#39;orientation à l&#39;emploi, et en réduisant les délais d&#39;accès à des opportunités professionnelles concrètes.
            </p>
          </div>
        </div>

        <Card className="mb-20 border-l-4 border-l-[#0b2a55] shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Des avancées au service des citoyens</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Les dispositifs développés dans le cadre de RE&#39;ACTIF PRO, et mobilisés par Alt&amp;Act, ont permis des avancées significatives en matière d&#39;impact social et d&#39;efficacité opérationnelle, notamment :
            </p>
            <ul className="space-y-3 mb-6">
              {avancees.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ces avancées sont conçues pour répondre de manière concrète aux besoins essentiels des citoyens : reconnaissance, utilité sociale, sécurité des parcours, accès équitable à l&#39;emploi et adaptation aux transformations économiques et technologiques.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Une conduite éthique garantie par Alt&amp;Act</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              L&#39;association Alt&amp;Act assure la conduite éthique des actions mises en œuvre, en veillant notamment à :
            </p>
            <ul className="space-y-3 mb-4">
              {ethique.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0b2a55] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Les services proposés s&#39;inscrivent dans une logique d&#39;accessibilité universelle, de protection des données et de supervision humaine, garantissant une utilisation responsable des outils technologiques au service de l&#39;insertion professionnelle et du bien-être au travail.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80" alt="Accompagnement éthique" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="bg-[#0b2a55] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Un impact mesurable et durable</h3>
          <p className="text-blue-100 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            À travers cette articulation entre engagement associatif et innovation opérationnelle, Alt&amp;Act contribue à :
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
            {impactFinal.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-blue-100 leading-relaxed text-center max-w-3xl mx-auto">
            Cette dynamique d&#39;impact s&#39;inscrit dans une perspective de transformation sociale durable, au service des individus, des territoires et du bien commun.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
