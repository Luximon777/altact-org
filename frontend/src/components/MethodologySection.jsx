import React from 'react';
import { Eye, Lightbulb, Rocket, BarChart, RefreshCw, Share2 } from 'lucide-react';
import { methodologyData } from '../mock/altactData';

const MethodologySection = () => {
  const iconMap = {
    Eye: Eye,
    Lightbulb: Lightbulb,
    Rocket: Rocket,
    BarChart: BarChart,
    RefreshCw: RefreshCw,
    Share2: Share2
  };

  return (
    <section id="methodologie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">MÉTHODOLOGIE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {methodologyData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {methodologyData.subtitle}
          </p>
        </div>

        {/* Methodology Phases */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#0b2a55] via-[#1a4280] to-[#0b2a55] opacity-20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologyData.phases.map((phase, index) => {
              const Icon = iconMap[phase.icon];
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#0b2a55]/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Phase Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#0b2a55] to-[#1a4280] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{phase.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-8 h-8 text-[#0b2a55]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-2xl p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Une démarche rigoureuse et collaborative
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre méthodologie de recherche-action nous permet de concevoir des solutions innovantes, 
            de mesurer leur impact et de les améliorer en continu pour mieux servir notre mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
