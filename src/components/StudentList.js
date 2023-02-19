import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchStudentsAsync,
  selectStudents,
} from "../features/Students/studentSlice";

const StudentList = () => {
  const students = useSelector(selectStudents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);
  return (
    <div>
      {students && students.length
        ? students.map((student, index) => (
            <div key={student.id}>
              {/* this link works b/c it's defined in Main.js*/}
              <Link to={`/Students/${student.id}`}>
                <p>
                  {index + 1}. Name: {student.firstName} {student.lastName}
                </p>
              </Link>
              <p> Email: {student.email}</p>
              <br />
            </div>
          ))
        : "No students are currently attending"}
    </div>
  );
};
export default StudentList;
