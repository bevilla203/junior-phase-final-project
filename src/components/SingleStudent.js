import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  selectSingleStudent,
  fetchSingleStudent,
} from "../features/SingleStudent/singleStudentSlice";

export default function SingleStudent() {
  const [school, setSchool] = useState({})
  const { studentId } = useParams(); // gets studentId param from URL
  // useSelector gets a hold of the state SingleCampus which is located in the redux store
  const singleStudent = useSelector(selectSingleStudent);

  const { firstName, lastName, imageUrl, gpa, campusId, email } = singleStudent;
  const dispatch = useDispatch();

  /////////////////////////////////////////////////
  const retrieveCampus = async () => {
    try {
      await Axios.get(`http://localhost:3000/api/Campuses/${campusId}`)
        .then(res => setSchool(res.data))
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////////////////////////////////////

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
    retrieveCampus();
  }, [dispatch]);

  return (
    <div id="single-student" className="column">
      <div id="single-student-detail" className="row">
        <div className="column mr1">
          <h1>
            {firstName} {lastName}
          </h1>

          <img src={imageUrl} />
          <p> {email}</p>
          <i> {gpa}</i>
        </div>
        <hr />
        {/* <hr> provides a thematic break, a horizontal line spanning the whole page*/}
        <h2>Campus Info:</h2>
        <Link to={`/Campuses/${campusId}`}>
          <p>{school.name}</p>
        </Link>
      </div>
    </div>
  );
}
