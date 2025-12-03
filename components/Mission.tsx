import React from 'react';
import { Microscope, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  const cards = [
    {
      icon: <Microscope size={32} className="text-cyan-600" />,
      title: "Precisione Analitica",
      description: "Tecnologie all'avanguardia per risultati precisi al millesimo. Strumentazione HPLC e GC-MS di ultima generazione."
    },
    {
      icon: <ShieldCheck size={32} className="text-emerald-500" />,
      title: "Compliance Normativa",
      description: "Supporto completo per HACCP, ISO e normative ambientali. Il tuo partner per la conformità legale totale."
    },
    {
      icon: <Clock size={32} className="text-blue-500" />,
      title: "Rapidità Certificata",
      description: "Processi ottimizzati per tempi di risposta ridotti del 30% rispetto alla media di mercato, senza compromessi."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Mission: Eccellenza nel Dato Analitico
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            CRC S.r.l. non fornisce solo numeri, ma certezze. Il nostro obiettivo è elevare lo standard di qualità dei nostri clienti attraverso analisi rigorose e consulenza proattiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-cyan-300 hover:shadow-cyan-100 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 opacity-5">
         <Microscope size={600} />
      </div>
    </section>
  );
};

export default Mission;