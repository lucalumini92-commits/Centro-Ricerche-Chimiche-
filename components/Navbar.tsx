import React, { useState, useEffect } from 'react';
import { Menu, X, FlaskConical } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Vantaggi', href: '#vantaggi' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-cyan-500 p-2 rounded-lg text-white">
            <FlaskConical size={28} />
          </div>
          <div className="leading-tight">
            <span className="block text-xl font-bold text-slate-800 tracking-wide">CRC S.r.l.</span>
            <span className="block text-xs font-medium text-cyan-600 tracking-wider">Centro Ricerche Chimiche</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contatti"
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-cyan-500/30"
          >
            Richiedi Preventivo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-700 hover:text-cyan-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-semibold text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#contatti"
               onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 text-center px-6 py-3 bg-cyan-600 text-white text-base font-bold rounded-lg shadow-md"
            >
              Richiedi Preventivo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;