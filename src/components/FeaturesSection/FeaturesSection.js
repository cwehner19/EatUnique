import React from 'react';
import './FeaturesSection.css'; // Ensure this CSS file is properly linked

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="container">
        <h2>Discover EatUnique's Features</h2>
        <p>Explore the key features that make our recipe generator a must-have tool for every home cooked meal.</p>
        <div className="features-grid">
          <div className="feature-item">
            <img src="/path/to/your/image.png" alt="Feature 1" />
            <h3>Feature Title 1</h3>
            <p>Description of Feature 1</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/your/image.png" alt="Feature 2" />
            <h3>Feature Title 2</h3>
            <p>Description of Feature 2</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/your/image.png" alt="Feature 3" />
            <h3>Feature Title 3</h3>
            <p>Description of Feature 3</p>
          </div>
          <div className="feature-item">
            <img src="/path/to/your/image.png" alt="Feature 4" />
            <h3>Feature Title 4</h3>
            <p>Description of Feature 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;