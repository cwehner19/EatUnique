import React from 'react';
import './LoginPage_module.css'; // Make sure to import the CSS

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <header>
        <h1 className="header-title">Eat Unique</h1>
        <div className="home-desktop-menu">
          <nav className="home-links">
            <span className="home-nav-link bodySmall">Recipes</span>
            <span className="home-nav-link bodySmall">Cookbook</span>
            <span className="home-nav-link bodySmall">About Us</span>
            <a href="/" className="homepage-button">Home</a> {/* Use Link if routing within app */}
          </nav>
        </div>
        <div className="header-links">
          <a href="/login">Login</a> | <a href="/create-account">Create Account</a>
        </div>
      </header>
      
      <div className="home-hero">
        <div className="heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading">Welcome Back</h1>
            <span className="home-hero-sub-heading">Log in to continue</span>
          </div>
        </div>
      </div>
      
      <div className="login-container">
        <form id="login-form" className="login-form" onSubmit={handleSubmit}>
          <div className="form-field username-field">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="form-field password-field">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="buttonFilled">Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;