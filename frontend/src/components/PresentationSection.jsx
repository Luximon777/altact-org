import React from 'react';
import { Globe, Target, Users, Lightbulb, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

function PresentationSection() {
  return (
    <section id="presentation" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0b2a55]/10 text-[#0b2a55] text-sm font-semibold rounded-full mb-4">FICHE INSTITUTIONNELLE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2a55] mb-4">Présentation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Acteur de la société civile engagé pour une Europe inclusive, compétitive et solidaire.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg"><strong className="text-[#0b2a55]">ALT&amp;ACT</strong> est une organisation de la société civile qui oeuvre à concrétiser les priorités stratégiques de l&apos;Union européenne en matière d&apos;emploi, d&apos;inclusion et de cohésion sociale.</p>
            <p className="text-gray-700 leading-relaxed mb-4">Notre mission : traduire les objectifs européens en actions de terrain pour renforcer l&apos;employabilité, l&apos;effectivité des droits sociaux et le lien social dans un contexte de transitions accélérées.</p>
            <p className="text-gray-700 leading-relaxed">Face aux défis européens que sont les pénuries de compétences, la fragmentation des parcours professionnels et les nécessaires transitions numérique et écologique, ALT&amp;ACT élabore et déploie des réponses systémiques.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/5318962/pexels-photo-5318962.jpeg?w=600" alt="Solidarité" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="bg-[#0b2a55] rounded-2xl p-8 md:p-12 text-white mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Notre approche : l&apos;insertion professionnelle comme pilier de la cohésion sociale</h3>
          <p className="text-blue-100 leading-relaxed mb-8 text-center max-w-3xl mx-auto">Nous partageons la conviction portée par l&apos;UE : la prospérité économique durable repose sur des sociétés inclusives et unies.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">L&apos;emploi et la cohésion sociale sont indissociables.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">L&apos;accès au marché du travail nécessite des environnements inclusifs.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">Une insertion durable renforce la stabilité sociale.</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b2a55] mb-4">Notre contribution aux priorités européennes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-[#0b2a55]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-[#0b2a55] mb-2">1. Promouvoir un emploi de qualité</h4>
                <p className="text-gray-600">Nous accompagnons les organisations dans l&apos;adoption de pratiques responsables.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#0b2a55]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-[#0b2a55] mb-2">2. Développer les compétences</h4>
                <p className="text-gray-600">Nous agissons sur le capital humain et l&apos;accompagnement personnalisé.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#0b2a55]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-[#0b2a55] mb-2">3. Améliorer les marchés du travail</h4>
                <p className="text-gray-600">Nous favorisons la transparence et la mobilité professionnelle.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#0b2a55]">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-[#0b2a55] mb-2">4. Garantir l&apos;égalité des chances</h4>
                <p className="text-gray-600">Nous construisons des marchés du travail véritablement inclusifs.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/7698016/pexels-photo-7698016.jpeg?w=600" alt="Inclusion" className="w-full h-80 object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0b2a55] mb-6">Notre valeur ajoutée européenne</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Compétences et Main-d&apos;oeuvre : Répondre aux pénuries par une inclusion ciblée.</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Jeunes, seniors et personnes handicapées : Faciliter l&apos;accès à l&apos;emploi.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Transitions numérique et écologique : Adapter les compétences.</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Espace européen intégré : Renforcer la mobilité.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Gouvernance éthique</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">Notre action s&apos;appuie sur une gouvernance démocratique, fondée sur la transparence, la participation et l&apos;évaluation rigoureuse de notre impact social.</p>
            <p className="text-gray-700 leading-relaxed">Par l&apos;innovation sociale, nous faisons évoluer les pratiques vers des modèles plus humains, efficaces et durables.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/8127810/pexels-photo-8127810.jpeg?w=600" alt="Gouvernance" className="w-full h-80 object-cover" />
          </div>
        </div>

        <Card className="mb-20 bg-gray-50 border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#0b2a55]" />
              <h3 className="text-2xl font-bold text-[#0b2a55]">Positionnement stratégique</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Un partenaire opérationnel pour les politiques européennes d&apos;emploi.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Un interlocuteur éligible aux dispositifs de financement de l&apos;UE.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#0b2a55] flex-shrink-0" />
                <span className="text-gray-700">Un contributeur actif aux dynamiques de coopération transnationale.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4a8a] rounded-2xl p-8 md:p-12 text-white text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-6 max-w-4xl mx-auto">En conclusion, <strong>ALT&amp;ACT</strong> s&apos;engage à faire de l&apos;insertion professionnelle un levier essentiel de la cohésion sociale européenne.</p>
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-blue-200 font-medium">Chitrasen LUXIMON</p>
            <p className="text-blue-300 text-sm">Fondateur</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PresentationSection;
