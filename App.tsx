import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;