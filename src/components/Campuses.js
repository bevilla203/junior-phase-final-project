import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusesAsync, selectCampuses } from "../features/Campuses/campusSlice"
import { Link } from "react-router-dom";
import AddCampus from "./AddCampus";
export default function Campuses() {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCampusesAsync());
    }, [dispatch]);
  // based return statement off of Readium's AllAuthor's
  // section
  return (
    <div>
      <AddCampus  />
      <h1 className="campusHeader" > Campuses </h1>
      {campuses && campuses.length
        ? campuses.map(campus => (
            <Link
            to={`/Campuses/${campus.id}`}>
              <div key= {campus.id} className="campus_row">
                <img className = "campusImg" src={campus.imageUrl} />
                <h2>{campus.name}</h2>
            </div>
            <hr />
            </Link>
          ))
        : `Couldn't find the campus with id ${campuses.id}`}
    </div>
  );
}
