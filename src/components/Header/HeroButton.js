import React from 'react';
import './HeroButton.css';

function HeroButton() {
    return (
      <main>
            <nav>
                <ul className="hero-button">
                    {/* Insert routes after href=/ */}
                    <a href="/preferences">Get Started</a>
                </ul>
            </nav>
      </main>
    );
}

export default HeroButton;