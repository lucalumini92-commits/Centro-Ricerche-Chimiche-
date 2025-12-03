import React from 'react';
import { FlaskConical, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="text-cyan-500">
                    <FlaskConical size={24} />
                </div>
                <span className="text-xl font-bold text-white tracking-wide">CRC S.r.l.</span>
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook size={20} /></a>
            </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} Centro Ricerche Chimiche S.r.l. - P.IVA 12345678901</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
                <a href="#" className="hover:text-white">Termini e Condizioni</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;