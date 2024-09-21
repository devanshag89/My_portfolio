import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Partials/Home";
import data from "./assets/data";
import student from "./assets/student";
import About from "./Partials/About";
import Project from "./Partials/Project";
import Skill from "./Partials/Skill";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data}/>}/>
          <Route path="/about" element={<About data={data} student={student}/>}/>
          <Route path="/projects" element={<Project data={data}/>}/>
          <Route path="/skills" element={<Skill data={data} />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;