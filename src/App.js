import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import HeroSection from './components/HeroSection/HeroSection.js';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.js';
import PreferencesForm from './components/PreferencesForm/PreferencesForm.js';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Define routes for home, preferences, login, and account creation */}
            <Route path="/" element={<HomePage />} />
            <Route path="/preferences" element={<PreferencesForm />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
