import "./App.css";
import MasonryGrid from "./components/Portfolio/MasonryGrid";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <header className="App-header">
          <Routes>
            <Route path="/portfolio" element={<MasonryGrid />} />
            <Route path="/" element={<Landing />}/>
            {/* <Route path="/landing" element={<Landing />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
};

export default App;
