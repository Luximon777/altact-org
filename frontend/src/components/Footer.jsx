import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { footerData, contactData } from '../mock/altactData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_institut-fusion/artifacts/n4nzcgj5_LOGOS%202.png"
                alt="Alt&Act - L'insertion professionnelle sans barrières"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              {footerData.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactData.address.street}, {contactData.address.city}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactData.email}`} className="text-sm hover:text-white transition-colors">
                  {contactData.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactData.phone}`} className="text-sm hover:text-white transition-colors">
                  {contactData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Accès rapide</h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#/mentions-legales"
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1 group"
                >
                  Mentions légales
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#/confidentialite"
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1 group"
                >
                  Politique de confidentialité
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
              {footerData.legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>
              © {currentYear} Alt&Act. Tous droits réservés.
            </p>
            <p>
              Conçu avec passion pour l'insertion professionnelle sans barrières
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
