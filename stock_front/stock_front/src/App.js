import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Portfolio from "./components/Portfolio";
import BuyStock from "./components/BuyStock";
import Budget from "./components/Budget";
import CreateDematAccount from "./components/CreateDematAccount";
import Dashboard from "./components/Dashboard";
import Learn from "./components/Learn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/buy/:stockName" element={<BuyStock />} />
        <Route path="/create-demat-account" element={<CreateDematAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Budget" element={<Budget />}/> 
        <Route path="/Learn" element={<Learn />}/>

      </Routes>
    </Router>
  );
};

export default App;