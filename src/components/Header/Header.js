import React from 'react';
import './Header.css'; // Assuming you extracted CSS relevant to the header

function Header() {
  return (
    <header>
        <h1 className="header-title">Eat Unique</h1>
        <div className="home-desktop-menu">
            <nav className="home-links">
                <span className="bodySmall">Recipes</span>
                <span className="bodySmall">Cookbook</span>
                <span className="bodySmall">About Us</span>
            </nav>
        </div>
        <div className="header-links">
            <a href="login_page.html">Login</a> | <a href="create_account.html">Create Account</a>
        </div>
    </header>
  );
}

export default Header;