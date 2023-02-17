import React, { useEffect } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSingleCampus,
  fetchSingleCampus
} from "../features/singleCampus/singleCampusSlice"; // must create features/singleCampus/singleCampusSlice

export default function SingleCampus () {
  const { campusId } = useParams(); // what does this do? do I need it?

    const singleCampus = useSelector(selectSingleCampus);
    // I should destructure singleCampus.info as the parts that make up a campus
    const { id, name, imageUrl, address, description } = singleCampus.info; // what does .info do?
    // what did a single Author have?
  const { comments, stories } = singleCampus; // why have to lines of this??

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