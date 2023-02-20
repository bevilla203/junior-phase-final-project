import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchStudentsAsync,
  selectStudents,
  deleteStudentAsync
} from "../features/Students/studentSlice";
import CreateStudent from "./CreateStudent";


export default function Students() {
  const Navigate = useNavigate();
  const [loading, isLoading] = useState(true);
    const students = useSelector(selectStudents);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchStudentsAsync());
      isLoading(false)
    }, [dispatch, students]);
  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
  }
  return (
    <div>
      <CreateStudent />
      <h1 className="studentHeader"> Students </h1>
      {loading ? <div> Loading resources </div> : null}
      {students && students.length ? (
        students.map((student) => (
          <div className="student" key={student.id}>
            <button id={student.id} onClick={() => handleDelete(student.id)}> x </button>
            <Link to={`/Students/${student.id}`}>
              <div className="student_row">
                <img className="studentImg" src={student.imageUrl} />
                <h2>{`${student.firstName} ${student.lastName}`}</h2>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <h1> Couldn't find any student😤</h1>
      )}
    </div>
  );
}
