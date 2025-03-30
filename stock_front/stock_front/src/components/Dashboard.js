import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import "../style/Dashboard.css";

const STOCK_SYMBOL = "AAPL"; // Example: Apple stock
const API_URL = "https://api.damee.com/stocks/daily"; // Replace with actual Damee API URL

const Dashboard = () => {
  const [stockData, setStockData] = useState([]);
  const [stockPrice, setStockPrice] = useState(0);
  const [sectorDistribution, setSectorDistribution] = useState([]);

  useEffect(() => {
    fetchStockData();
    fetchSectorDistribution();
  }, []);

  const fetchStockData = async () => {
    try {
      const response = await axios.get(`${API_URL}?symbol=${STOCK_SYMBOL}`);
      const timeSeries = response.data.prices; // Adjust based on Damee API response

      if (!timeSeries || timeSeries.length === 0) {
        console.error("Error: No stock data available.");
        return;
      }

      const latestPrice = timeSeries[timeSeries.length - 1].close;
      setStockPrice(parseFloat(latestPrice));

      const chartData = timeSeries.map((entry) => ({
        name: entry.date, // Assuming Damee API returns date
        price: parseFloat(entry.close),
      }));

      setStockData(chartData);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  const fetchSectorDistribution = async () => {
    try {
      const response = await axios.get("https://api.damee.com/stocks/sector-distribution"); // Replace with actual Damee API endpoint
      setSectorDistribution(response.data);
    } catch (error) {
      console.error("Error fetching sector distribution:", error);
    }
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE"];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Stock Dashboard</h1>
      
      {/* Stock Price Display */}
      <div className="stock-info">
        <h2>{STOCK_SYMBOL} Stock Price: ${stockPrice.toFixed(2)}</h2>
      </div>

      {/* Stock Price Chart */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Sector Distribution */}
      <div className="chart-container">
        <h2 className="chart-title">Sector Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={sectorDistribution} dataKey="value" nameKey="sector" cx="50%" cy="50%" outerRadius={100} label>
              {sectorDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
