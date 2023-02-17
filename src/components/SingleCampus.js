import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectSingleCampus,
  fetchSingleCampus,
} from "../features/SingleCampus/singleCampusSlice"; 

export default function SingleCampus() {
  const { campusId } = useParams(); // what does this do? do I need it?
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
        <div className="column mr1">
          <h1>{name}</h1>
          <img src={imageUrl} />
          <br />
          <i> {address}</i>
          <p>{description}</p>
        </div>
        <hr />
        {/* <hr> provides a thematic break, a horizontal line spanning the whole page*/}
        <h2>Student Info:</h2>
        <div>
          {students && students.length
            ? students.map((student, index) => (
                <div key={student.id}>
                  <p>
                    {index + 1}. Name: {student.firstName} {student.lastName}
                  </p>
                  <p> Email: {student.email}</p>
                  <br />
                </div>
              ))
            : "No students are currently attending"}
        </div>
      </div>
    </div>
  );
}

