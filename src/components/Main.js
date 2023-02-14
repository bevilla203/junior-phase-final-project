import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Navbar from "../pages/Navbar"

/* 
    add components that will exist on every page here!
*/
const Main = () => {
    return (
      <>
        <Navbar/>
      </>
    );
};

export default Main;