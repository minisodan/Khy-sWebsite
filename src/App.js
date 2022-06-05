import { dom } from "aria-query";
import "./App.css";

import MasonryGrid from "./components/MasonryGrid/MasonryGrid";
import Navbar from "./components/Navbar/Navbar";
import PictureCard from "./components/PictureCard/PictureCard";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Error from "./components/Navbar/Error";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Background from "./components/Backgroundimage/Background";

// i want to make khyron the home image with a center (enter) button that allows access into the page

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
          <Background />

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<MasonryGrid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </header>
      </Router>
      <div className="madeBy">
        <small> © 2022 Khyron Site by Mason Myles</small>
      </div>
    </div>
  );
}

export default App;
