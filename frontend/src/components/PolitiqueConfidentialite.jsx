import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

function PolitiqueConfidentialite() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Politique de confidentialité (RGPD)</h1>
          </div>
          <p className="text-xl text-blue-100">Association ALT&amp;ACT - Altérité &amp; Action</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Responsable du traitement</h2>
            </div>
            <p className="text-gray-700 mb-3">Le responsable du traitement des données collectées via ce site est :</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li><strong>Association :</strong> ALT&amp;ACT - Altérité &amp; Action</li>
              <li><strong>Adresse :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              <li><strong>Contact :</strong> <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline">contact@altact.org</a></li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Données collectées</h2>
            </div>
            <p className="text-gray-700 mb-3">Selon les fonctionnalités du site, nous pouvons collecter :</p>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li><strong>Données de contact :</strong> nom, prénom, email, organisation, message (via formulaire de contact).</li>
              <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées, logs (hébergeur).</li>
              <li><strong>Cookies :</strong> uniquement si des outils tiers sont activés (mesure d&apos;audience, vidéos, etc.).</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Finalités et bases légales</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span><strong>Répondre aux demandes</strong> (contact, information) - base : intérêt légitime ou consentement.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span><strong>Gestion des échanges</strong> (suivi, relation partenaire) - base : intérêt légitime.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0b2a55] mt-1">•</span>
                <span><strong>Mesure d&apos;audience</strong> (si activée) - base : consentement.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Destinataires</h2>
            <p className="text-gray-700 leading-relaxed">Les données sont destinées aux personnes habilitées au sein d&apos;ALT&amp;ACT. Elles peuvent être traitées par des prestataires techniques uniquement pour les finalités décrites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durées de conservation</h2>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li><strong>Demandes de contact :</strong> jusqu&apos;à 24 mois après le dernier échange.</li>
              <li><strong>Données techniques/logs :</strong> selon les durées de l&apos;hébergeur (souvent 6 à 12 mois).</li>
              <li><strong>Cookies :</strong> 13 mois maximum (si utilisés).</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">6. Sécurité</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">ALT&amp;ACT met en oeuvre des mesures organisationnelles et techniques pour protéger les données.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">7. Vos droits</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, opposition, limitation, portabilité.</p>
            <p className="text-gray-700 leading-relaxed">Pour exercer vos droits : <a href="mailto:contact@altact.org" className="text-[#0b2a55] hover:underline font-semibold">contact@altact.org</a></p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">8. Transferts hors UE</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">L&apos;hébergement via GitHub Pages peut impliquer des transferts de données hors Union européenne, encadrés par des garanties appropriées.</p>
          </section>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button onClick={handleBackHome} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l&apos;accueil
          </Button>
          <span className="text-gray-500 text-sm">Dernière mise à jour : Janvier 2025</span>
        </div>
      </main>
    </div>
  );
}

export default PolitiqueConfidentialite;
