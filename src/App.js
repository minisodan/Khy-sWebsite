import "./App.css";
import MasonryGrid from "./components/Portfolio/MasonryGrid";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <div class="bg-slate-800 text-slate-800 bg-cover bg-center bg-landing-image">
      <Router>
        <header>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/*"
              element={
                <div class="w-full">
                  <div>
                    <Routes>
                      <Route path="/portfolio" element={<MasonryGrid />} />
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
