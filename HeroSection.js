import React from 'react';
import HeroButton from './HeroButton';
import './HeroSection.css';


function HeroSection() {
  return (
    <main className="home-hero">

      <div className="hero-item">
          <h1 className="home-hero-heading">
            From Pantry to Plate - Unleash Your Inner Chef
          </h1>
      </div>
          
      <div className="hero-item">
          <div className="home-hero-sub-heading">
              Your Personal Recipe Generator
          </div>
      </div>
          
      <div className="hero-item">
            <HeroButton />
      </div>

    </main>
  );
}

export default HeroSection;