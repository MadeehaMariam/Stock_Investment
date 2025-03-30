import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/CreateDematAccount.css"; // Import CSS

const CreateDematAccount = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    alert("Once you've created a Demat account, you'll be redirected to buy stocks.");
    navigate("/buystock");
  };

  return (
    <div className="create-demat-container">
      <div className="create-demat-box">
        <h2 className="create-demat-title">Create a Demat Account</h2>
        <p className="create-demat-subtitle">To buy stocks, choose a broker below:</p>

        {/* Broker Links */}
        <a href="https://upstox.com/open-demat-account" target="_blank" className="broker-link broker-upstox" onClick={handleRedirect}>
          Open with Upstox
        </a>
        <a href="https://groww.in/open-demat-account" target="_blank" className="broker-link broker-groww" onClick={handleRedirect}>
          Open with Groww
        </a>
        <a href="https://www.angelone.in/open-demat-account" target="_blank" className="broker-link broker-angel" onClick={handleRedirect}>
          Open with Angel One
        </a>
        <a href="https://zerodha.com/open-account" target="_blank" className="broker-link broker-zerodha" onClick={handleRedirect}>
          Open with Zerodha Kite
        </a>

        {/* YouTube Tutorials */}
        <h3 className="tutorial-title">Watch Tutorials</h3>
        <a href="https://www.youtube.com/results?search_query=how+to+open+demat+account+in+upstox" target="_blank" className="tutorial-link">
          📺 Upstox Demat Account Guide
        </a>
        <a href="https://www.youtube.com/results?search_query=how+to+open+demat+account+in+groww" target="_blank" className="tutorial-link">
          📺 Groww Demat Account Guide
        </a>
        <a href="https://www.youtube.com/results?search_query=how+to+open+demat+account+in+angel+one" target="_blank" className="tutorial-link">
          📺 Angel One Demat Account Guide
        </a>
        <a href="https://www.youtube.com/results?search_query=how+to+open+demat+account+in+zerodha" target="_blank" className="tutorial-link">
          📺 Zerodha Demat Account Guide
        </a>

        {/* Proceed Button */}
        <button onClick={handleRedirect} className="proceed-button">
          Proceed to Buy Stocks
        </button>
      </div>
    </div>
  );
};

export default CreateDematAccount;
