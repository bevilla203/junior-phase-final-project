import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StudentList } from "./";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleCampus,
  fetchSingleCampus,
} from "../features/SingleCampus/singleCampusSlice";


export default function SingleCampus() {
  const { campusId } = useParams();
  // useSelector gets a hold of the state SingleCampus which is located in the redux store
  const singleCampus = useSelector(selectSingleCampus);

  const { name, imageUrl, address, description, students } = singleCampus;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  return (
    <div id="single-campus" className="column">
      <div id="single-campus-detail" className="row">
        <div >
          <h1>{name}</h1>
          <img src={imageUrl} />
          <br />
          <i> {address}</i>
          <p>{description}</p>
        </div>
        <hr />
        {/* <hr> provides a thematic break, a horizontal line spanning the whole page*/}
        <h2>Students Attending:</h2>
        <StudentList students={students} />
      </div>
    </div>
  );
}
