import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Home() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Campuses</Link>
            </li>
            <li>
              <Link to="/">Students</Link>
            </li>
          </ul>
        </nav>
        <h1> Welcome to the Home Page!</h1>
      </>
    );
};