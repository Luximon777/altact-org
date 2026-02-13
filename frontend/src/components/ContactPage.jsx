import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Navigation from './Navigation';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <header className="relative bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Parlons de votre projet</h1>
          <p className="text-xl text-blue-100">
            Que vous soyez un particulier en recherche d accompagnement ou une organisation souhaitant transformer ses pratiques, nous sommes à votre écoute.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0b2a55] mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent" placeholder="Votre nom" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent">
                  <option>Choisir un sujet</option>
                  <option>Accompagnement individuel</option>
                  <option>Partenariat entreprise</option>
                  <option>Devenir membre</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent" placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0b2a55] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a4280] transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-blue-100">Grand Est, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">contact@altact.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-blue-100">+33 (0)3 XX XX XX XX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-[#0b2a55] mb-4">Horaires</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Lundi - Vendredi:</span> 9h00 - 18h00</p>
                <p><span className="font-medium">Samedi - Dimanche:</span> Fermé</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;
