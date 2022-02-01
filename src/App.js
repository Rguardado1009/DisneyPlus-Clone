import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Details from "./components/Details.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/detail" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
