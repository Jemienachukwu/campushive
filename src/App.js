import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Events from "./pages/Events";
import Clubs from "./pages/Clubs";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import JoinUs from "./pages/JoinUs";
import Hives from "./pages/Hives";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/events" element={<Events />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path="/why-join-a-commmunity" element={<JoinUs />} />
        </Routes>
        <Routes>
          <Route path="/clubs-orgs" element={<Clubs />} />
        </Routes>
        <Routes>
          <Route path="/clubs-orgs/:hive/:id" element={<Hives />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
