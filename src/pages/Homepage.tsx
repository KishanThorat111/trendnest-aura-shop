
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Hero/HeroSection';
import TrendingSection from '../components/Features/TrendingSection';
import AIRecommendations from '../components/Features/AIRecommendations';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrendingSection />
        <AIRecommendations />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
