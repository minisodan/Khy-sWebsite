import "./App.css";
import MasonryGrid from "./components/MasonryGrid/MasonryGrid";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Error from "./components/Navbar/Error";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Background from "./components/Backgroundimage/Background";
import React from "react";

// i want to make khyron the home image with a center (enter) button that allows access into the page
// npm run server-dev

const { useState, useEffect } = React;

const App = () => {
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
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiResponse: "",
//       scroll: 0,
//    };
//   }

//   callAPI() {
//     fetch("http://localhost:9000")
//       .then((res) => res.text())
//       .then((res) => this.setState({ apiResponse: res }));
//   }

//   componentWillMount() {
//     this.callAPI();
//   }

//   handleScroll = (event) => {
//     setScroll(event.currentTarget.scrollTop);
//   };

//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <header className="App-header">
//             <Navbar />
//             <Background />

//             <Routes>
//               <Route path="/about" element={<About />} />
//               <Route path="/" element={<MasonryGrid />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/*" element={<Error />} />
//             </Routes>
//           </header>
//         </Router>
//         <div className="madeBy">
//           <small> © 2022 Khyron Site by Mason Myles</small>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
