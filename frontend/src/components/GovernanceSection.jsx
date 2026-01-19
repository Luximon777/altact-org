import React from 'react';
import { Users, Shield, Scale, Target } from 'lucide-react';
import { governanceData } from '../mock/altactData';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const GovernanceSection = () => {
  const iconMap = {
    Users: Users,
    Shield: Shield,
    Scale: Scale,
    Target: Target
  };

  return (
    <section id="gouvernance" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Shield className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">GOUVERNANCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Une gouvernance démocratique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {governanceData.intro}
          </p>
        </div>

        {/* Principles */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Principes sociocratiques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {governanceData.principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-100 hover:border-[#0b2a55]/30 transition-all duration-300 text-center transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-[#0b2a55] font-semibold text-sm">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Bodies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {governanceData.bodies.map((body, index) => {
            const Icon = iconMap[body.icon];
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#0b2a55]/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:bg-[#0b2a55] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#0b2a55] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-3">{body.name}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {body.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img
            src={governanceData.image}
            alt="Gouvernance Alt&Act"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a55]/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Transparence et responsabilité</h3>
              <p className="text-blue-100 text-lg">
                Une gouvernance au service de notre mission d'intérêt général
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
