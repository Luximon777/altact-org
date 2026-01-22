import React from 'react';
import { Globe, Target, Users, Lightbulb, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const PresentationSection = () => {
  const priorites = [
    {
      title: "Promouvoir un emploi de qualité et durable",
      description: "Nous accompagnons les organisations dans l'adoption de pratiques responsables, favorisant une économie sociale de marché fondée sur l'investissement humain."
    },
    {
      title: "Développer les compétences tout au long de la vie",
      description: "Nous agissons sur le capital humain en intégrant l'adaptation aux transitions, le développement de compétences transversales et un accompagnement personnalisé des publics éloignés de l'emploi."
    },
    {
      title: "Améliorer le fonctionnement des marchés du travail",
      description: "Nous favorisons la transparence, la mobilité professionnelle et le dialogue entre acteurs, en particulier pour les personnes vulnérables."
    },
    {
      title: "Garantir l'égalité des chances et l'inclusion",
      description: "Nous nous attaquons aux barrières structurelles liées à l'âge, au handicap, à l'origine ou aux parcours de vie, pour construire des marchés du travail véritablement inclusifs."
    }
  ];

  const valeurAjoutee = [
    { icon: Users, text: "Compétences & Main-d'œuvre : Répondre aux pénuries par une inclusion ciblée." },
    { icon: Target, text: "Jeunes, seniors & personnes handicapées : Faciliter l'accès et le maintien dans l'emploi." },
    { icon: Lightbulb, text: "Transitions numérique & écologique : Adapter les compétences et les parcours." },
    { icon: Globe, text: "Espace européen intégré : Renforcer la mobilité et l'employabilité." }
  ];

  const positionnement = [
    "Un partenaire opérationnel pour la mise en œuvre des politiques européennes d'emploi et d'inclusion.",
    "Un interlocuteur éligible aux dispositifs de financement et d'expérimentation de l'UE.",
    "Un contributeur actif aux dynamiques de coopération transnationale et de diffusion des bonnes pratiques."
  ];

  return (
    <section id="presentation" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0b2a55]/10 text-[#0b2a55] text-sm font-semibold rounded-full mb-4">
            FICHE INSTITUTIONNELLE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2a55] mb-4">
            Présentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acteur de la société civile engagé pour une Europe inclusive, compétitive et solidaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              <strong className="text-[#0b2a55]">ALT&amp;ACT</strong> est une organisation de la société civile qui œuvre à concrétiser les priorités stratégiques de l&#39;Union européenne en matière d&#39;emploi, d&#39;inclusion et de cohésion sociale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre mission : traduire les objectifs européens en actions de terrain pour renforcer l&#39;employabilité, l&#39;effectivité des droits sociaux et le lien social dans un contexte de transitions accélérées.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Face aux défis européens que sont les pénuries de compétences, la fragmentation des parcours professionnels et les nécessaires transitions numérique et écologique, ALT&amp;ACT élabore et déploie des réponses systémiques. Nous plaçons la dignité humaine, l&#39;emploi de qualité et la participation sociale au cœur de notre action.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/5318962/pexels-photo-5318962.jpeg?w=600&q=80" alt="Solidarité et collaboration" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="bg-[#0b2a55] rounded-2xl p-8 md:p-12 text-white mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Notre approche : l&#39;insertion professionnelle comme pilier de la cohésion sociale
          </h3>
          <p className="text-blue-100 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Nous partageons la conviction portée par l&#39;UE : la prospérité économique durable repose sur des sociétés inclusives et unies. C&#39;est pourquoi notre action s&#39;articule autour de trois principes fondamentaux :
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">L&#39;emploi et la cohésion sociale sont indissociables.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">L&#39;accès au marché du travail nécessite des environnements inclusifs et non discriminants.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">Une insertion durable renforce la stabilité sociale et la confiance démocratique.</p>
            </div>
          </div>
          <p className="text-blue-100 leading-relaxed mt-8 text-center max-w-3xl mx-auto">
            En tant qu&#39;acteur intermédiaire, nous facilitons le dialogue entre institutions publiques, territoires, entreprises et citoyens, pour transformer les politiques en pratiques efficaces.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b2a55] mb-4">
              Notre contribution opérationnelle aux priorités européennes pour l&#39;emploi
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre action répond directement aux lignes directrices de l&#39;UE :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {priorites.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-[#0b2a55] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0b2a55] font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0b2a55] mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/7698016/pexels-photo-7698016.jpeg?w=600&q=80" alt="Inclusion professionnelle" className="w-full h-96 object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-[#0b2a55] mb-6">
              Notre valeur ajoutée à l&#39;échelle européenne
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              ALT&amp;ACT apporte une réponse concrète aux grands enjeux identifiés par l&#39;UE :
            </p>
            <ul className="space-y-4">
              {valeurAjoutee.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#0b2a55]" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6">
              Nous développons des modèles d&#39;accompagnement innovants et transférables, permettant une mise à l&#39;échelle européenne des solutions efficaces d&#39;insertion.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Gouvernance éthique &amp; Innovation sociale</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre action s&#39;appuie sur une gouvernance démocratique, fondée sur la transparence, la participation et l&#39;évaluation rigoureuse de notre impact social. Nous favorisons la coopération intergénérationnelle et la concertation constructive entre toutes les parties prenantes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Par l&#39;innovation sociale, nous faisons évoluer les pratiques vers des modèles plus humains, efficaces et durables, en pleine cohérence avec les exigences européennes de responsabilité sociale et de respect des droits fondamentaux.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/8127810/pexels-photo-8127810.jpeg?w=600&q=80" alt="Gouvernance et innovation" className="w-full h-80 object-cover" />
          </div>
        </div>

        <Card className="mb-20 bg-gray-50 border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Positionnement stratégique</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              ALT&amp;ACT se positionne comme :
            </p>
            <ul className="space-y-4">
              {positionnement.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#0b2a55] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4a8a] rounded-2xl p-8 md:p-12 text-white text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
            En conclusion, <strong>ALT&amp;ACT</strong> s&#39;engage à faire de l&#39;insertion professionnelle un levier essentiel de la cohésion sociale européenne. En articulant emploi de qualité, inclusion et dignité humaine, nous participons concrètement à la construction d&#39;une Europe plus résiliente, compétitive et solidaire.
          </p>
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-blue-200 font-medium">Chitrasen LUXIMON</p>
            <p className="text-blue-300 text-sm">Fondateur</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSection;
