import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout"
import Home from "../pages/Home"

/* 
    This is you entry point for your routes
*/
const Main = () => {
    return (
      <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />} />
        </Routes>
      </>
    );
};

export default Main;