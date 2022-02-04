import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Details from "./components/Details.js";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
