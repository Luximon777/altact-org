import React from 'react';
import { UserCheck, Heart, Award, Mail, Check } from 'lucide-react';
import { membershipData } from '../mock/altactData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';

const MembershipSection = () => {
  const iconMap = {
    UserCheck: UserCheck,
    Heart: Heart,
    Award: Award,
    Mail: Mail
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="membre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <UserCheck className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">ENGAGEMENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {membershipData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {membershipData.subtitle}
          </p>
        </div>

        {/* Membership Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {membershipData.types.map((type, index) => {
            const Icon = iconMap[type.icon];
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#0b2a55]/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0b2a55]/10 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:bg-[#0b2a55] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#0b2a55] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{type.type}</CardTitle>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0b2a55] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#0b2a55]/5 to-[#1a4280]/5 rounded-2xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Rejoignez-nous dès aujourd'hui
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ensemble, construisons une société plus inclusive où chacun peut s'épanouir professionnellement
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Devenir membre
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
