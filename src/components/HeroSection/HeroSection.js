import React from 'react';
import './HeroSection.css'; // Assuming you have separate CSS for this section

function HeroSection() {
  return (
    <div className="home-hero">
      <div className="heroContainer home-hero1">
        <div className="home-container01">
          <h1 className="home-hero-heading heading1">
            From Pantry to Plate - Unleash Your Inner Chef
          </h1>
          <span className="home-hero-sub-heading bodyLarge">
            Your Personal Recipe Generator
          </span>
          <div className="home-btn-group">
            <a href="allergen_food_filter.html" className="button-link">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;