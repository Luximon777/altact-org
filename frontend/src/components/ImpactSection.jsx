import React from 'react';
import { Users, TrendingUp, Handshake, Sparkles, Quote } from 'lucide-react';
import { impactData } from '../mock/altactData';
import { Card, CardContent } from './ui/card';

const ImpactSection = () => {
  const iconMap = {
    Users: Users,
    TrendingUp: TrendingUp,
    Handshake: Handshake,
    Sparkles: Sparkles
  };

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">NOTRE IMPACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {impactData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {impactData.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactData.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#0b2a55]/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0b2a55]/10 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:bg-[#0b2a55] transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#0b2a55] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-[#0b2a55] mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="relative bg-gradient-to-br from-[#0b2a55] to-[#1a4280] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative grid md:grid-cols-2 gap-8 p-12">
            {/* Quote */}
            <div className="flex flex-col justify-center">
              <Quote className="w-12 h-12 text-white/30 mb-6" />
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                "{impactData.testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-bold text-lg">
                  {impactData.testimonial.author}
                </p>
                <p className="text-blue-200">
                  {impactData.testimonial.role}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>
                <img
                  src={impactData.testimonial.image}
                  alt={impactData.testimonial.author}
                  className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
