import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grazie per aver contattato CRC S.r.l. Risponderemo al più presto.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Parla con un Esperto</h2>
          <p className="mt-4 text-slate-600">Richiedi un preventivo o una consulenza tecnica immediata.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-slate-100 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Contatti Diretti</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">Sede Operativa</p>
                            <p className="text-slate-600">Via della Chimica, 12, 20100 Milano (MI)</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">Telefono</p>
                            <p className="text-slate-600">+39 02 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">Email</p>
                            <p className="text-slate-600">info@crc-lab.it</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold mb-2">Area Download</h3>
                    <p className="text-slate-300 text-sm mb-6">Scarica il nostro certificato di accreditamento e la brochure servizi.</p>
                </div>
                <button className="flex items-center justify-between w-full p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                    <span className="font-semibold">Certificazioni ISO 9001</span>
                    <Download size={20} className="text-emerald-400" />
                </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Inviaci una richiesta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nome e Cognome</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  placeholder="Mario Rossi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Aziendale</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  placeholder="mario@azienda.it"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Messaggio</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  placeholder="Descrivi la tipologia di analisi richiesta..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1"
              >
                Richiedi Consulenza Gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;