import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusesAsync, selectCampuses } from "../features/Campuses/campusSlice"
import { Link } from "react-router-dom";
export default function Campuses() {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCampusesAsync());
    }, [dispatch]);
  // unsure as to why activeStyle doesn't work....
  // I used React Router's website to understand Link
  // based return statement off of Readium project's AllAuthor's
  // section
  return (
    <div>
      <h1 className="campusHeader" > List of All Campuses </h1>
      {campuses && campuses.length
        ? campuses.map(campus => (
            <Link
            to={`/Campuses/${campus.id}`}>
              <div key= {campus.id} className="campus row">
                <img className = "campusImg" src={campus.imageUrl} />
                <h2>{campus.name}</h2>
            </div>
            <hr />
            </Link>
          ))
        : "Couldn't find any campuses..."}
    </div>
  );
}
