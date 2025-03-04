import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import RestoList from "./pages/Resto List/restoList";
import "./App.css";
import { SkeletonTheme } from "react-loading-skeleton";
import TranslateTextContext from "./Components/context/Translate";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const [isIndonesia, setIsIndonesia] = useState(true);
  return (
    <TranslateTextContext.Provider value={{ isIndonesia, setIsIndonesia }}>
      <Provider store={store}>
        <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F5F5F5">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurant/:id" element={<Detail />} />
              <Route path="/search" element={<Search />} />
              <Route path="/RestoList" element={<RestoList />} />
            </Routes>
          </Router>
        </SkeletonTheme>
      </Provider>
    </TranslateTextContext.Provider>
  );
};

export default App;
