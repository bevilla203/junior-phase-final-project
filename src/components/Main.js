import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Home, Navbar, Campuses, Students, SingleCampus, SingleStudent, AddCampus } from "./";
import { fetchCampusesAsync } from "../features/Campuses/campusSlice";
import { fetchStudentsAsync } from "../features/Students/studentSlice"
/* 
    this is your point of entry for your routes
*/
const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    dispatch(fetchStudentsAsync())
  }, [dispatch]);

  return (
    <>
      <h1> Acme Schools</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Campuses" element={<Campuses />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Campuses/:campusId" element={<SingleCampus />} />
        <Route path="/Students/:studentId" element={<SingleStudent />} />
        <Route path="/Campuses/AddCampus" element={<AddCampus/>} />

        {/* how does it know what campus id is?? */}
      </Routes>
    </>
  );
};

export default Main;
