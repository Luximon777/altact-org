import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Globe } from 'lucide-react';
import { Button } from './ui/button';

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const handleBackHome = () => {
    window.location.href = '/#/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Politique de confidentialité (RGPD)</h1>
          </div>
          <p className="text-xl text-blue-100">Association ALT&ACT – Altérité & Action</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Responsable du traitement</h2>
            </div>
            <p className="text-gray-700 mb-3">
              Le responsable du traitement des données collectées via ce site est :
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li><strong>Association :</strong> ALT&ACT – Altérité & Action</li>
              <li><strong>Adresse :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              <li>
                <strong>Contact :</strong>{' '}
                <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                  contact@altact.org
                </a>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Données collectées</h2>
            </div>
            <p className="text-gray-700 mb-3">Selon les fonctionnalités du site, nous pouvons collecter :</p>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li>
                <strong>Données de contact :</strong> nom, prénom, email, organisation, message (via formulaire de contact).
              </li>
              <li>
                <strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées, logs (hébergeur).
              </li>
              <li>
                <strong>Cookies :</strong> uniquement si des outils tiers sont activés (mesure d'audience, vidéos, etc.).
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-[#0b2a55] rounded">
              <p className="text-gray-700">
                <strong>Nous ne collectons pas de données sensibles</strong> via ce site (santé, opinions, etc.), 
                sauf si vous nous les transmettez volontairement dans un message.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Finalités et bases légales</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span>
                  <strong>Répondre aux demandes</strong> (contact, information) — base : <em>intérêt légitime</em> ou <em>consentement</em>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span>
                  <strong>Gestion des échanges</strong> (suivi, relation partenaire) — base : <em>intérêt légitime</em>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span>
                  <strong>Mesure d'audience</strong> (si activée) — base : <em>consentement</em>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span>
                  <strong>Obligations légales</strong> (sécurité, prévention des fraudes) — base : <em>obligation légale</em>.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Destinataires</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données sont destinées aux personnes habilitées au sein d'ALT&ACT.
              Elles peuvent être traitées par des prestataires techniques (hébergeur, outils de formulaire, analytics)
              uniquement pour les finalités décrites.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durées de conservation</h2>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li><strong>Demandes de contact :</strong> jusqu'à 24 mois après le dernier échange.</li>
              <li><strong>Données techniques/logs :</strong> selon les durées de l'hébergeur (souvent 6 à 12 mois).</li>
              <li><strong>Cookies :</strong> 13 mois maximum (si utilisés).</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce site peut utiliser des cookies nécessaires à son fonctionnement et, le cas échéant, des cookies de mesure
              d'audience ou de services tiers. Quand des cookies non essentiels sont utilisés, votre consentement est demandé.
            </p>
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-gray-700">
                <strong>Note :</strong> Si des outils tiers (Google Analytics, Matomo, vidéos YouTube) sont ajoutés,
                un bandeau de consentement sera mis en place et les cookies utilisés seront listés.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">7. Sécurité</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ALT&ACT met en œuvre des mesures organisationnelles et techniques pour protéger les données (accès limité,
              mesures de sécurité, bonnes pratiques). Aucun système n'est totalement sécurisé, mais nous appliquons
              des standards raisonnables de protection.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">8. Vos droits</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants : <strong>accès, rectification, effacement, 
              opposition, limitation, portabilité</strong> (selon les cas).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour exercer vos droits, écrivez à :{' '}
              <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline font-semibold">
                contact@altact.org
              </a>
              <br />
              Une preuve d'identité pourra être demandée en cas de doute raisonnable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vous pouvez également introduire une réclamation auprès de la{' '}
              <a 
                href="https://www.cnil.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0b2a55] hover:underline font-semibold"
              >
                CNIL
              </a>.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">9. Transferts hors UE</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              L'hébergement via GitHub Pages peut impliquer des transferts de données hors Union européenne.
              Le cas échéant, ces transferts sont encadrés par des garanties appropriées (ex. clauses contractuelles types).
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Mise à jour</h2>
            <p className="text-gray-700 leading-relaxed">
              La présente politique peut être modifiée. La date de dernière mise à jour est indiquée ci-dessous.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            onClick={handleBackHome}
            variant="outline"
            className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          <span className="text-gray-500 text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialite;
