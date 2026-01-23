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
            <h1 className="text-4xl md:text-5xl font-bold">Politique de confidentialité</h1>
          </div>
          <p className="text-xl text-blue-100">Association ALT&amp;ACT</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Responsable du traitement</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li><strong>Association :</strong> ALT&amp;ACT</li>
              <li><strong>Adresse :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
              <li><strong>Contact :</strong> contact@altact.org</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Données collectées</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li><strong>Données de contact :</strong> nom, prénom, email, message</li>
              <li><strong>Données techniques :</strong> adresse IP, navigateur, pages visitées</li>
              <li><strong>Cookies :</strong> si outils tiers activés</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Finalités</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li>Répondre aux demandes de contact</li>
              <li>Gestion des échanges et relations partenaires</li>
              <li>Mesure d&apos;audience si activée</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Destinataires</h2>
            <p className="text-gray-700">Les données sont destinées aux personnes habilitées au sein d&apos;ALT&amp;ACT.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservation</h2>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li>Demandes de contact : 24 mois</li>
              <li>Données techniques : 6 à 12 mois</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">6. Sécurité</h2>
            </div>
            <p className="text-gray-700">ALT&amp;ACT met en oeuvre des mesures pour protéger vos données.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">7. Vos droits</h2>
            </div>
            <p className="text-gray-700 mb-4">Vous disposez des droits : accès, rectification, effacement, opposition, limitation, portabilité.</p>
            <p className="text-gray-700">Contact : contact@altact.org</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">8. Transferts hors UE</h2>
            </div>
            <p className="text-gray-700">GitHub Pages peut impliquer des transferts hors UE, encadrés par des garanties appropriées.</p>
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

export default PolitiqueConfidentialite;
