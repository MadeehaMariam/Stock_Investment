import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/BuyStock.css";

const BuyStock = () => {
  const { stockName } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState("Market");
  const [product, setProduct] = useState("Delivery");
  const [hasDematAccount, setHasDematAccount] = useState(null);
  const [stockDetails, setStockDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("Regular");
  const [useMTF, setUseMTF] = useState(false);

  useEffect(() => {
    if (hasDematAccount) {
      setStockDetails({
        price: 1520.75,
        change: "+2.15%",
        volume: "1.2M",
      });
    }
  }, [hasDematAccount]);

  const totalPrice = stockDetails ? (stockDetails.price * quantity).toFixed(2) : 0;

  const handleUserChoice = (choice) => {
    if (choice === "yes") {
      setHasDematAccount(true);
    } else {
      alert("Redirecting to create a Demat account.");
      navigate("/create-demat-account");
    }
  };

  if (hasDematAccount === null) {
    return (
      <div className="demat-container">
        <div className="demat-box">
          <h2 className="demat-question">Do you have a Demat account?</h2>
          <div className="demat-buttons">
            <button className="yes-button" onClick={() => handleUserChoice("yes")}>Yes</button>
            <button className="no-button" onClick={() => handleUserChoice("no")}>No</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="buy-stock-container">
      <div className="buy-stock-box">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{stockName}</h2>
        {stockDetails && (
          <div className="stock-details">
            <p>Price: ₹{stockDetails.price}</p>
            <p>Change: {stockDetails.change}</p>
            <p>Volume: {stockDetails.volume}</p>
          </div>
        )}
        <div className="quantity-container">
          <span>Quantity:</span>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <div className="price-container">
          <span>Total Price: ₹{totalPrice}</span>
        </div>
        <div className="order-type-container">
          <span>Order Type:</span>
          <button className={orderType === "Market" ? "selected" : ""} onClick={() => setOrderType("Market")}>Market</button>
          <button className={orderType === "Limit" ? "selected" : ""} onClick={() => setOrderType("Limit")}>Limit</button>
        </div>
        <div className="product-container">
          <span>Product Type:</span>
          <button className={product === "Delivery" ? "selected" : ""} onClick={() => setProduct("Delivery")}>Delivery</button>
          <button className={product === "Intraday" ? "selected" : ""} onClick={() => setProduct("Intraday")}>Intraday</button>
        </div>
        <button 
  className="review-button" 
  onClick={() => {
    alert(`Buying ${quantity} shares of ${stockName} for ₹${totalPrice}`);
    navigate("/Portfolio"); // Redirects to Portfolio page after alert
  }}
>
  Review Buy Order
</button>

      </div>
    </div>
  );
};

export default BuyStock;
