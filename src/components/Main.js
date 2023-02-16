import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Campuses from "./Campuses"

import { fetchCampusesAsync } from "../features/Campuses/campusSlice";
/* 
    add components that will exist on every page here!
*/
const Main = () => {
  return (
    <>
      <Navbar />
      
    </>
  );
};

export default Main;
