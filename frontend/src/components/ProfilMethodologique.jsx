import React, { useEffect } from 'react';
import { ArrowLeft, Users, Target, Lightbulb, BookOpen, Award, Heart, Building2 } from 'lucide-react';
import { Button } from './ui/button';

const ProfilMethodologique = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Profil, cadre méthodologique et déploiement associatif</h1>
          </div>
          <p className="text-xl text-blue-100">Chitrasen Luximon - Consultant en transitions professionnelles</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Profil</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              <strong>Chitrasen Luximon</strong> est consultant en transitions professionnelles et formateur pour adultes. 
              Depuis plus de sept années, il intervient de manière continue dans le champ de l'insertion professionnelle, 
              principalement dans le cadre de dispositifs institutionnels financés et régulés par France Travail.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              À ce jour, il a accompagné plus de <strong className="text-[#0b2a55]">2 000 personnes</strong>, 
              représentant plus de <strong className="text-[#0b2a55]">7 000 heures d'intervention</strong>, 
              à travers des parcours individuels et collectifs. La méthode d'accompagnement qu'il a développée affiche 
              un taux de satisfaction de <strong className="text-[#0b2a55]">98 %</strong>, mesuré à partir des outils 
              d'évaluation intégrés aux dispositifs institutionnels.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl">
              <div className="text-5xl font-bold text-[#0b2a55] mb-2">2000+</div>
              <div className="text-gray-700 font-semibold">Personnes accompagnées</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl">
              <div className="text-5xl font-bold text-[#0b2a55] mb-2">7000+</div>
              <div className="text-gray-700 font-semibold">Heures d'intervention</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl">
              <div className="text-5xl font-bold text-[#0b2a55] mb-2">98%</div>
              <div className="text-gray-700 font-semibold">Taux de satisfaction</div>
            </div>
          </div>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Fondements théoriques et approches mobilisées</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              L'accompagnement repose sur un socle méthodologique structuré, articulant plusieurs approches 
              complémentaires, mobilisées de manière intégrée et opérationnelle :
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Approche axiologique</h3>
                <p className="text-gray-700 leading-relaxed">
                  Identification, hiérarchisation et réappropriation consciente des valeurs comme socle de l'identité 
                  professionnelle et levier d'orientation durable.
                </p>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Approche phénoménologique</h3>
                <p className="text-gray-700 leading-relaxed">
                  Prise en compte de l'expérience vécue, du sens attribué au parcours et à la situation professionnelle, 
                  sans imposition de modèles normatifs.
                </p>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Approche constructiviste</h3>
                <p className="text-gray-700 leading-relaxed">
                  Considération du parcours professionnel comme une construction évolutive, permettant à la personne 
                  de redevenir actrice de son orientation.
                </p>
              </div>

              <div className="p-6 bg-blue-50 border-l-4 border-[#0b2a55] rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dynamique d'individuation (références jungiennes)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Recherche de cohérence entre les dimensions personnelles, professionnelles et sociales, favorisant 
                  des choix alignés et durables.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Orientation méthodologique centrale</h2>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#0b2a55]/10 to-[#1a4280]/10 rounded-xl border-2 border-[#0b2a55]/20">
              <p className="text-gray-900 leading-relaxed text-lg font-semibold mb-4">
                La priorité méthodologique est donnée au travail sur l'identité professionnelle, et non sur la seule image professionnelle.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                L'image professionnelle relève de la perception externe et des codes attendus dans un contexte donné. 
                Elle est variable et dépendante du regard d'autrui. L'identité professionnelle constitue en revanche 
                un socle interne plus stable, structurant la capacité à se positionner, à agir et à évoluer durablement 
                dans un environnement professionnel en mutation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cette orientation permet de dépasser une approche centrée sur la simple mise en conformité aux attentes 
                du marché du travail. L'image professionnelle devient ainsi une conséquence ajustée du travail identitaire, 
                et non un objectif autonome.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-[#0b2a55]" />
              <h2 className="text-3xl font-bold text-gray-900">Déploiement au sein de l'association Alt&Act</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Dans le cadre de l'association Alt&Act, cette méthodologie a été enrichie, formalisée et adaptée afin 
              d'être déployée collectivement dans les actions d'accompagnement portées par l'association.
            </p>

            <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contributeurs sociétaux</h3>
              <p className="text-gray-700 leading-relaxed">
                Elle est mise en œuvre auprès de contributeurs sociétaux, entendus comme l'ensemble des publics 
                engagés dans une démarche de recherche d'emploi, de formation, de stage ou de reconversion professionnelle, 
                quels que soient leur âge, leur niveau de qualification ou leur parcours antérieur.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-900 font-semibold text-lg mb-3">Cette approche permet :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    d'accompagner des <strong>trajectoires professionnelles hétérogènes</strong>,
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    de <strong>sécuriser les parcours</strong> dans un contexte de mutations économiques et sociales,
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0b2a55] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    de favoriser une <strong>insertion professionnelle durable</strong>, fondée sur une identité professionnelle 
                    consolidée et socialement reliée.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-blue-50 border-2 border-[#0b2a55]/30 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                L'action de l'association Alt&Act s'inscrit ainsi dans une logique d'intérêt général, 
                visant à renforcer la capacité des personnes à contribuer pleinement à la société, par une place professionnelle 
                choisie, comprise et assumée.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ProfilMethodologique;
