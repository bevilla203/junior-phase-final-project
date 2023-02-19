import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";

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

      <Outlet />
    </React.Fragment>
  );
}
