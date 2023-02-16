import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudentsAsync,
  selectStudents,
} from "../features/Students/studentSlice";
export default function Students() {
    const students = useSelector(selectStudents);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchStudentsAsync());
    }, [dispatch]);

  return (
    <div>
      <h1 className="studentHeader"> List of All Students </h1>
      {students && students.length ? (
        students.map((student) => (
          // <NavLink
          //   to={`/campus/${campus.id}`}
          //   key={`All campus: ${campus.id}`}
          // >
          //
          <div key={student.id} className="campus row">
            <img className="studentImg" src={student.imageUrl} />
            <h2>{`${student.firstName} ${student.lastName}`}</h2>
          </div>
          // </NavLink>
        ))
      ) : (
        <h1> "Couldn't find any students"</h1>
      )}
    </div>
  );
}
