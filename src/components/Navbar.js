import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Campuses from "./Campuses";
import Students from "./Students";


export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Campuses">Campuses</Link>
          </li>
          <li>
            <Link to="/Students">Students</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Campuses" element={<Campuses />} />
        <Route path="/Students" element={<Students />} />
        
      </Routes>

      <Outlet />
    </React.Fragment>
  );
}
