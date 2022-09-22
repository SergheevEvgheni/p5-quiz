import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Register from "./components/views/Register";
import Test from "./components/views/Test";
import Submit from "./components/views/Submit";
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
  );
}

export default App;
