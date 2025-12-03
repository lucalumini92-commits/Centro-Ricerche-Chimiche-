import React from 'react';
import { Droplets, Utensils, Factory, FlaskConical, Sprout, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Settore Alimentare",
      icon: <Utensils className="w-8 h-8 text-white" />,
      desc: "Analisi nutrizionali, microbiologiche, ricerca patogeni, allergeni, e shelf-life test per la sicurezza alimentare.",
      color: "bg-orange-500"
    },
    {
      id: 2,
      title: "Analisi Acque e Rifiuti",
      icon: <Droplets className="w-8 h-8 text-white" />,
      desc: "Analisi potabilità, acque reflue, classificazione rifiuti industriali e test di cessione secondo norme vigenti.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Controllo Processi Industriali",
      icon: <Factory className="w-8 h-8 text-white" />,
      desc: "Monitoraggio linee produttive, controllo materie prime, ricerca contaminanti e controllo qualità in linea.",
      color: "bg-slate-600"
    },
    {
      id: 4,
      title: "Cosmetico e Pharma",
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      desc: "Challenge test, stabilità, analisi metalli pesanti e controllo purezza per il settore cosmetico e farmaceutico.",
      color: "bg-pink-500"
    },
    {
      id: 5,
      title: "Agricoltura e Terreni",
      icon: <Sprout className="w-8 h-8 text-white" />,
      desc: "Analisi fertilità suolo, residui fitosanitari, analisi fogliari e piani di concimazione personalizzati.",
      color: "bg-emerald-500"
    },
    {
      id: 6,
      title: "Consulenza HACCP e Sicurezza",
      icon: <FileText className="w-8 h-8 text-white" />,
      desc: "Stesura manuali HACCP, audit fornitori, formazione del personale e aggiornamento normativo continuo.",
      color: "bg-cyan-600"
    }
  ];

  return (
    <section id="servizi" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">Le Nostre Competenze</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-2">
            Soluzioni Analitiche Integrate
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Offriamo un ventaglio completo di servizi per garantire la conformità e la qualità del tuo prodotto in ogni fase.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${service.color} transition-all duration-300 group-hover:w-full opacity-10 group-hover:opacity-100`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.desc}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-cyan-600 group-hover:text-white transition-colors cursor-pointer">
                  Scopri di più <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;