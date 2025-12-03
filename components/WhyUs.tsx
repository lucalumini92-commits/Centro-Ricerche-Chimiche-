import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  const data = [
    { name: 'Standard Mercato', value: 85, color: '#94a3b8' },
    { name: 'CRC S.r.l.', value: 99.8, color: '#06b6d4' },
  ];

  const StatBox = ({ number, label }: { number: string; label: string }) => (
    <div className="bg-white/50 backdrop-blur-md p-6 rounded-xl border border-white/60 shadow-lg text-center">
      <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">{number}</div>
      <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">{label}</div>
    </div>
  );

  return (
    <section id="vantaggi" className="py-24 bg-slate-900 relative text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Perché il <span className="text-cyan-400">Dato Analitico</span> è il nostro DNA.
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              In un settore dove l'errore non è contemplato, CRC S.r.l. investe costantemente in tecnologia e formazione. La nostra precisione non è un'opzione, è una garanzia certificata.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <StatBox number="24/48h" label="Tempi Medi Risposta" />
              <StatBox number="15k+" label="Analisi Annue" />
              <StatBox number="100%" label="Compliance ISO" />
              <StatBox number="25+" label="Anni Esperienza" />
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-emerald-500">
                <p className="italic text-slate-300">"Affidabilità assoluta e supporto tecnico costante. CRC è un'estensione del nostro reparto qualità."</p>
                <div className="mt-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-600 mr-3"></div>
                    <div>
                        <div className="text-sm font-bold text-white">Ing. Marco Rossi</div>
                        <div className="text-xs text-slate-400">Quality Manager - FoodCorp SpA</div>
                    </div>
                </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Indice di Accuratezza & Precisione</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} domain={[0, 100]} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={60}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-400 mt-4">
                *Dati basati sui risultati dei circuiti interlaboratorio (Ring Test) 2024.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;