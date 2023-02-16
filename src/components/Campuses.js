import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusesAsync, selectCampuses } from "../features/Campuses/campusSlice"
//import { NavLink } from "react-router-dom";
export default function Campuses() {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCampusesAsync());
    }, [dispatch]);
  return (
    <div>
      <h1 className="campusHeader" > List of All Campuses </h1>
      {campuses && campuses.length
        ? campuses.map(campus => (
            // <NavLink
            //   to={`/campus/${campus.id}`}
            //   key={`All campus: ${campus.id}`}
            // >
              //
              <div key= {campus.id} className="campus row">
                <img className = "campusImg" src={campus.imageUrl} />
                <h2>{campus.name}</h2>
              </div>
            // </NavLink>
          ))
        : "Couldn't find any campuses...???"}
    </div>
  );
}
