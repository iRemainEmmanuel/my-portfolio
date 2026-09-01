import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10 py-12 sm:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Emmanuel</h3>
            <p className="text-gray-400 text-sm sm:text-base">
             Software Developer | Startup Founder | Building Practical Technology Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#qualifications" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Qualifications
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services/Expertise */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">My Expertise</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  IT Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                 Business Registration & Compliance
                </a>
              </li>
              {/* <li>
                <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Graphic Design
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-[#00ff88]" />
                <span className="text-gray-400 text-sm sm:text-base">Ndola, Zambia</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[#00ff88]" />
                <a href="tel:++260966271989" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  +260966271989
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-[#00ff88]" />
                <a href="mailto:mwambaemmanuel005@gmail.com" className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                  Shoot Me An Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base">
              © {currentYear} Emmanuel. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                #GodFearing
              </a>
              <a className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                #Developer
              </a>
              <a className="text-gray-400 hover:text-[#00ff88] transition-colors text-sm sm:text-base">
                #Innovator
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 