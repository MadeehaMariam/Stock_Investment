import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo-container">
          <h1 className="logo">Market Matrics</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/market" className={({ isActive }) => (isActive ? "active" : "")}>
                Market
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
                Portfolio
              </NavLink>
            </li>
           <li>
              <NavLink to="/Budget" className={({ isActive }) => (isActive ? "active" : "")}>
                Budget
              </NavLink>
              </li>
            <li>
              <NavLink to="/Learn" className={({ isActive }) => (isActive ? "active" : "")}>
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="home-content">
        <div className="hero">
          <div className="content-wrapper">
            <h2>Welcome to Market Matrics</h2>
            <p>
              Investing made simple. Discover insights, track markets, and manage your portfolio with ease.
            </p>
            <div className="cta-buttons">
              <NavLink to="/dashboard" className="btn">
                Go to Dashboard
              </NavLink>
              <NavLink to="/learn" className="btn secondary">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </main>

      {/* Optional footer section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Market Matrics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
