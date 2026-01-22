import React from 'react';
import { Target, Users, Lightbulb, TrendingUp, Handshake, Building } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ImpactSection = () => {
  const engagements = [
    {
      icon: Target,
      title: "Accompagnement personnalisé",
      description: "Chaque parcours est unique. Nous adaptons nos interventions aux besoins spécifiques de chaque personne."
    },
    {
      icon: Users,
      title: "Approche collaborative",
      description: "Nous travaillons en étroite collaboration avec les entreprises, institutions et associations du territoire."
    },
    {
      icon: Lightbulb,
      title: "Innovation sociale",
      description: "Nous expérimentons de nouvelles approches pour répondre aux défis de l'insertion professionnelle."
    },
    {
      icon: TrendingUp,
      title: "Mesure d'impact",
      description: "Nous évaluons rigoureusement nos actions pour améliorer continuellement nos pratiques."
    },
    {
      icon: Handshake,
      title: "Partenariats durables",
      description: "Nous construisons des relations de confiance avec l'ensemble de nos parties prenantes."
    },
    {
      icon: Building,
      title: "Ancrage territorial",
      description: "Nous agissons au plus près des besoins des territoires et de leurs habitants."
    }
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2a55] mb-6">
            Nos Engagements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous œuvrons au quotidien pour une société plus inclusive et solidaire, 
            en plaçant l'humain au cœur de chacune de nos actions.
          </p>
        </div>

        {/* Engagements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => {
            const Icon = engagement.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0b2a55]/30"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center mb-4 group-hover:bg-[#0b2a55] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#0b2a55] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {engagement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {engagement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#0b2a55] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ensemble, construisons une société plus inclusive
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Rejoignez-nous dans notre mission pour accompagner chaque personne 
              vers une insertion professionnelle réussie et durable.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-[#0b2a55] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
