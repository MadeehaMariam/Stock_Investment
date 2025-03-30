import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();

  const nseCompanies = [
    { id: 1, name: "Tata Consultancy Services", marketCap: "126.97 Cr", peRatio: 47.30, roe: "12.44%", highLow: "2383.06 / 948.07" },
    { id: 2, name: "Reliance Industries", marketCap: "480.08 Cr", peRatio: 24.42, roe: "2.39%", highLow: "3530.95 / 2612.14" },
    { id: 3, name: "Infosys", marketCap: "715.65 Cr", peRatio: 23.88, roe: "11.64%", highLow: "963.16 / 3858.71" },
    { id: 4, name: "HDFC Bank", marketCap: "20.93 Cr", peRatio: 37.10, roe: "6.40%", highLow: "1124.65 / 600.76" },
    { id: 5, name: "ICICI Bank", marketCap: "318.82 Cr", peRatio: 15.97, roe: "18.91%", highLow: "3382.41 / 2421.69" },
    { id: 6, name: "Hindustan Unilever", marketCap: "787.46Cr", peRatio: 39.22, roe: "29.10%", highLow: "2409.21/1803.45" },
    { id: 7, name: "Bharti Airtel", marketCap: "884.88 Cr", peRatio: 31.83, roe: "14.32%", highLow: "3446.85/ 2282.88"},
    { id: 8, name: "Kotak Mahindra Bank", marketCap: "292.43Cr", peRatio: 45.53, roe: "1.01%", highLow: "4201.38 / 313.19"},
    { id: 9, name: "State Bank of India", marketCap: "950.52 Cr", peRatio: 48.59, roe: "13.90%", highLow: "1255.38/ 1476.75"},
    { id: 10, name: "Bajaj Finance", marketCap: "430.55 Cr", peRatio: 18.79, roe: "3.82%", highLow: "3023.74/ 1219.16"}
  ];

  const handleBuyClick = (stockName) => {
    navigate(`/buy/${stockName}`);
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">NSE Companies</h2>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Company</th>
            <th>Market Cap</th>
            <th>P/E Ratio</th>
            <th>ROE</th>
            <th>52-Week High/Low</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {nseCompanies.map((company, index) => (
            <tr key={company.id}>
              <td>{index + 1}</td>
              <td className="company-name">{company.name}</td>
              <td>{company.marketCap}</td>
              <td>{company.peRatio}</td>
              <td>{company.roe}</td>
              <td>{company.highLow}</td>
              <td>
                <button className="buy-button" onClick={() => handleBuyClick(company.name)}>
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
  );
};

export default Portfolio;
