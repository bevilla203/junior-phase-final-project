import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectSingleStudent,
  fetchSingleStudent,
} from "../features/SingleStudent/singleStudentSlice"; 

export default function SingleStudent() {
  const { studentId } = useParams(); // gets studentId param from URL
  // useSelector gets a hold of the state SingleCampus which is located in the redux store
  const singleStudent = useSelector(selectSingleStudent);

  const { firstName, lastName, imageUrl, gpa, campusId } = singleStudent;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  return (
    <div id="single-student" className="column">
      <div id="single-student-detail" className="row">
        <div className="column mr1">
          <h1>{{ firstName, lastName }}</h1>
          <img src={imageUrl} />
          <br />
          <i> {gpa}</i>
        </div>
        <hr />
        {/* <hr> provides a thematic break, a horizontal line spanning the whole page*/}
        <h2>Campus Info:</h2>
        <p>{campusId}</p>
      </div>
    </div>
  );
}