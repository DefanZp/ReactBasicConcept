import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/search" element={ <Search />} />
      </Routes>
    </Router>
  )
};

export default App;