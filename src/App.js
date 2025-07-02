import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skils from "./component/Skils";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Hobby from "./component/Hobby";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/skils" element={<Skils />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </Router>
  );
}

export default App;
