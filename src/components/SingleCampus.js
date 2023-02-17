import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSingleCampus,
  fetchSingleCampus
} from "../features/SingleCampus/singleCampusSlice"; // must create features/singleCampus/singleCampusSlice

export default function SingleCampus () {
  const { campusId } = useParams(); // what does this do? do I need it?
  // useSelector gets a hold of the state SingleCampus which is located in the redux store
  const singleCampus = useSelector(selectSingleCampus); 
  
// I should destructure singleCampus.info as the parts that make up a campus
const { name, imageUrl, address, description, students } = singleCampus.info; // what does .info do?

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  return (
    <div id="single-campus" className="column">
      <div id="single-campus-detail" className="row">
        <div className="column mr1">
                  <h1>{name}</h1>
                  <i> {address}</i>
          <p>{description}</p>
        </div>
        <img src={`/${imageUrl}`} />
      </div>
          <hr /> 
{/* <hr> provides a thematic break, a horizontal line spanning the whole page*/}
    </div>
  );
};