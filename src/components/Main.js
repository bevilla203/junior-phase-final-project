import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout"
/* 
    This is you entry point for your routes
*/
const Main = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default Main;