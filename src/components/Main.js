import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Home, Navbar, Campuses, SingleCampus } from './';
import { fetchCampusesAsync } from "../features/Campuses/campusSlice";
/* 
    this is your point of entry for your routes
*/
const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);


  return (
    <>
      <h1> Acme Schools</h1>
      <Navbar />
      
    </>
  );
};

export default Main;
