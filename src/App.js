import React from 'react';
import Header from './components/Header/Header.js'; // Relative path from App.js to Header.js
import HeroSection from './components/HeroSection/HeroSection.js'; // Relative path from App.js to HeroSection.js
import FeaturesSection from './components/FeaturesSection/FeaturesSection.js'; // Already correct
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* Add more components as needed */}
      </main>
    </div>
  );
}

export default App;