"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturedListings from '../components/FeaturedListings';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
// import ConsultantChat from '../components/ConsultantChat';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-light relative">
      <div className="absolute top-0 left-0 w-full"> 
        <Navbar />
      </div>
    
      <main>
        <Hero />
        <Features />
        <FeaturedListings />
        <Stats />
        <CTA onTalkToConsultant={() => setIsChatOpen(true)} />
      </main>

      <Footer />
      
      {/* Floating Chat Interface
      <ConsultantChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} /> */}
    </div>
  );
};

export default App;
