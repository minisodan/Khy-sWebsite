import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing/Landing";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div className="bg-slate-800 text-slate-800 bg-fixed bg-center bg-landing-image">
      <Router>
        <header>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/*"
              element={
                <div className="w-full">
                  <div>
                    <Routes>
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          </Routes>
        </header>
      </Router>
    </div>
  );
};

export default App;
