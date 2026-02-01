import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestDeal from './components/BestDeal';
import NewArrival from './components/NewArrival';
import PromoVideo from './components/PromoVideo';
import SkillsGallery from './components/SkillsGallery';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-secondary font-sans selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <BestDeal />
        <NewArrival />
        <PromoVideo />
        <SkillsGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;