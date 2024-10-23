import "./App.css";
import MasonryGrid from "./components/Portfolio/MasonryGrid";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";

const App = () => {
  return (
    <div class="bg-slate-800 text-slate-800">
      <Router>
        <header>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/*"
              element={
                <div class="flex flex-row">
                  <NavBar />
                  <div class="w-full">
                    <div>
                      <Routes>
                        <Route path="/portfolio" element={<MasonryGrid />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </div>
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
