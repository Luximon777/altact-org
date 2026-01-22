import React, { useEffect } from 'react';
import { ArrowLeft, Target, Award, Building2, Briefcase, Brain, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

function ProfilMethodologique() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const expertises = [
    "Insertion et transition professionnelle (tous publics)",
    "Accompagnement des parcours de reconversion",
    "Développement des compétences psychosociales (soft skills)",
    "Analyse des trajectoires professionnelles et des freins systémiques",
    "Conception et pilotage de dispositifs d'accompagnement innovants",
    "Gestion de projet à impact social",
    "Contribution à des projets numériques orientés emploi et compétences"
  ];

  const approches = [
    { title: "Axiologie", desc: "Travail sur les valeurs et le sens" },
    { title: "Phénoménologie", desc: "Prise en compte de l'expérience vécue" },
    { title: "Constructivisme", desc: "Co-construction des parcours" },
    { title: "Psychologie analytique jungienne", desc: "Dynamique d'individuation" },
    { title: "Référentiels de valeurs", desc: "Seligman & Peterson, Schwartz" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12" />
            <h1 className="text-3xl md:text-4xl font-bold">Chitrasen LUXIMON</h1>
          </div>
          <p className="text-xl text-blue-100 mb-2">Consultant en transition professionnelle - Formateur pour adultes - Entrepreneur social</p>
          <p className="text-lg text-blue-200">Président et représentant légal de l&apos;association ALT&amp;ACT</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Positionnement professionnel</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              <strong className="text-[#0b2a55]">Chitrasen Luximon</strong> accompagne depuis plus de 7 ans des publics variés dans leurs parcours d&apos;insertion, de reconversion et de sécurisation professionnelle.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Son approche se distingue par une <strong>priorité méthodologique donnée au travail sur l&apos;identité professionnelle</strong>, considérée comme le socle préalable à toute stratégie d&apos;employabilité durable, plutôt qu&apos;à la seule notion d&apos;image professionnelle.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl">
              <div className="text-5xl font-bold text-[#0b2a55] mb-2">2000+</div>
              <div className="text-gray-700 font-semibold">Personnes accompagnées</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl">
              <div className="text-5xl font-bold text-[#0b2a55] mb-2">7000+</div>
              <div className="text-gray-700 font-semibold">Heures d&apos;intervention</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl">
              <div className="text-5xl font-bold text-[#0b2a55] mb-2">98%</div>
              <div className="text-gray-700 font-semibold">Taux de satisfaction</div>
            </div>
          </div>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Domaines d&apos;expertise</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {expertises.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Approches et fondements méthodologiques</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Sa pratique s&apos;appuie sur une architecture méthodologique structurée, intégrant notamment :
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {approches.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-[#0b2a55]">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-[#0b2a55] mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl border-2 border-[#0b2a55]/20">
              <p className="text-gray-700 leading-relaxed">
                Ces approches sont mobilisées dans une <strong>logique humaniste, systémique et non normative</strong>, favorisant l&apos;autonomie, la responsabilité et l&apos;estime de soi comme leviers d&apos;action.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Orientation méthodologique centrale</h2>
            </div>
            <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 rounded-lg">
              <p className="text-gray-900 leading-relaxed text-lg font-semibold mb-4">
                La priorité méthodologique est donnée au travail sur l&apos;identité professionnelle, et non sur la seule image professionnelle.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                L&apos;image professionnelle relève de la perception externe et des codes attendus dans un contexte donné. Elle est variable et dépendante du regard d&apos;autrui.
              </p>
              <p className="text-gray-700 leading-relaxed">
                L&apos;identité professionnelle constitue en revanche un socle interne plus stable, structurant la capacité à se positionner, à agir et à évoluer durablement dans un environnement professionnel en mutation.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Déploiement au sein d&apos;Alt&amp;Act</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Dans le cadre de l&apos;association Alt&amp;Act, cette méthodologie a été <strong>enrichie, formalisée et adaptée</strong> afin d&apos;être déployée collectivement dans les actions d&apos;accompagnement portées par l&apos;association.
            </p>
            <div className="space-y-4">
              <p className="text-gray-900 font-semibold text-lg">Cette approche permet :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">d&apos;accompagner des <strong>trajectoires professionnelles hétérogènes</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">de <strong>sécuriser les parcours</strong> dans un contexte de mutations économiques et sociales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">de favoriser une <strong>insertion professionnelle durable</strong>, fondée sur une identité professionnelle consolidée</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-6 bg-blue-50 border-2 border-[#0b2a55]/30 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                L&apos;action de l&apos;association Alt&amp;Act s&apos;inscrit dans une <strong className="text-[#0b2a55]">logique d&apos;intérêt général</strong>, visant à renforcer la capacité des personnes à contribuer pleinement à la société.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-8 flex items-center justify-start">
          <Button onClick={handleBackHome} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l&apos;accueil
          </Button>
        </div>
      </main>
    </div>
  );
}

export default ProfilMethodologique;
