import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import "./App.css";
import { SkeletonTheme } from "react-loading-skeleton";
import TranslateTextContext from "./Components/context/Translate";


const App = () => {
  const [isIndonesia, setIsIndonesia] = useState(true);
  return (
    <TranslateTextContext.Provider value={{ isIndonesia, setIsIndonesia }}>
    <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F5F5F5">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </SkeletonTheme>
    </TranslateTextContext.Provider>
  );
};

export default App;
