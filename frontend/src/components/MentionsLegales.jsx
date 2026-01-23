import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const handleBackHome = () => {
    window.location.href = '/#/';
  };;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions légales</h1>
          <p className="text-xl text-blue-100">Association ALT&ACT – Altérité & Action</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Dénomination :</strong> Association ALT&ACT – Altérité & Action</li>
              <li><strong>Forme juridique :</strong> Association de droit local Alsace-Moselle (loi du 19 avril 1908)</li>
              <li><strong>Siège social :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              <li><strong>Numéro au registre des associations :</strong> W672017439</li>
              <li>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                  contact@altact.org
                </a>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de la publication</h2>
            <p className="text-gray-700">
              <strong>Chitrasen Luximon</strong>, Président et représentant légal de l'association ALT&ACT.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement</h2>
            <p className="text-gray-700 mb-2">
              Le site est hébergé par <strong>GitHub, Inc.</strong> (GitHub Pages).
            </p>
            <p className="text-gray-700 mb-2">
              Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
            </p>
            <p className="text-gray-600 text-sm italic">
              Remarque : Le site utilise GitHub Pages pour l'hébergement statique.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble du contenu présent sur ce site (textes, visuels, logos, éléments graphiques, documents)
              est protégé par le droit d'auteur et demeure la propriété de l'association ALT&ACT ou de ses partenaires,
              sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle,
              sans autorisation préalable, est interdite.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liens hypertextes</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site peut contenir des liens vers des sites tiers. ALT&ACT n'exerce aucun contrôle sur ces sites
              et ne peut être tenue responsable de leur contenu ou de leurs pratiques.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protection des données personnelles</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour exercer ces droits, vous pouvez contacter ALT&ACT à l'adresse :{' '}
              <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                contact@altact.org
              </a>
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-700">
              Pour toute question, vous pouvez contacter ALT&ACT à l'adresse :{' '}
              <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">
                contact@altact.org
              </a>
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

export default MentionsLegales;
