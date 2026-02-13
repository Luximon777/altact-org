import React from 'react';
import { UserPlus, Heart, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from './Navigation';

function DevenirMembrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <header className="relative bg-gradient-to-br from-green-600 to-teal-600 text-white pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <UserPlus className="w-5 h-5" />
            <span className="text-sm font-medium">Rejoignez-nous</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Devenir membre</h1>
          <p className="text-xl text-green-100">
            Rejoignez ALT&ACT et participez à la construction d une société plus inclusive et plus humaine.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2a55] mb-4">Partager nos valeurs</h3>
            <p className="text-gray-600">Contribuez à une vision humaniste de l insertion professionnelle et du développement des compétences.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2a55] mb-4">Rejoindre un réseau</h3>
            <p className="text-gray-600">Intégrez une communauté de professionnels engagés dans la transformation sociale.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-[#0b2a55] mb-4">Agir concrètement</h3>
            <p className="text-gray-600">Participez activement aux projets et initiatives portés par l association.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold text-[#0b2a55] mb-8">Pourquoi devenir membre ?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b2a55] mb-1">Accès privilégié</h4>
                  <p className="text-gray-600">Bénéficiez d un accès aux événements, formations et ressources exclusives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b2a55] mb-1">Participation active</h4>
                  <p className="text-gray-600">Contribuez aux décisions et orientations stratégiques de l association.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b2a55] mb-1">Réseau professionnel</h4>
                  <p className="text-gray-600">Échangez avec des experts et professionnels partageant vos valeurs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b2a55] mb-1">Impact social</h4>
                  <p className="text-gray-600">Contribuez directement à des projets à fort impact sociétal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0b2a55] mb-6">Formulaire d adhésion</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Votre nom" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="+33 6 XX XX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Votre profession actuelle" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivation</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Pourquoi souhaitez-vous rejoindre ALT&ACT ?"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                Envoyer ma demande
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DevenirMembrePage;
