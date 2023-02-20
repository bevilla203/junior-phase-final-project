import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchStudentsAsync,
  selectStudents,
} from "../features/Students/studentSlice";
import CreateStudent from "./CreateStudent";
export default function Students() {
    const students = useSelector(selectStudents);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchStudentsAsync());
    }, [dispatch]);

  return (
    <div>
      <CreateStudent />
      <h1 className="studentHeader"> Students </h1>
      {students && students.length ? (
        students.map((student) => (
          <div className="student" key={student.id}>
            <button id={student.id}> x </button>
            <Link to={`/Students/${student.id}`}>
              <div className="student_row">
                <img className="studentImg" src={student.imageUrl} />
                <h2>{`${student.firstName} ${student.lastName}`}</h2>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <h1> "Couldn't find any students"</h1>
      )}
    </div>
  );
}
