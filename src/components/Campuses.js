import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCampusesAsync,
  selectCampuses,
} from "../features/Campuses/campusSlice";
import { Link, useNavigate } from "react-router-dom";
import { deleteCampusAsync } from "../features/Campuses/campusSlice";
import CreateCampus from "./CreateCampus";

export default function Campuses() {
  const Navigate = useNavigate();

  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    isLoading(false);
  }, [dispatch, campuses]);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      dispatch(deleteCampusAsync(id));
      //Navigate("/Deleted");
      // i had originally added a delete confirmed page...
      // i realize now to get the page to render fast, i just
      // needed to put campuses in useEffect
    } catch (error) {
      console.error(error);
    }
  };

  // based return statement off of Readium's AllAuthor's
  // section
  return (
    <div>
      <CreateCampus />
      <h1 className="campusHeader"> Campuses </h1>
      {loading ? <div> Loading resources</div> : null}
      {campuses && campuses.length
        ? campuses.map((campus) => (
            <div className="school" key={campus.id}>
              <button id={campus.id} onClick={() => handleDelete(campus.id)}>
                x
              </button>
              <Link to={`/Campuses/${campus.id}`}>
                <div className="campus_row">
                  <img className="campusImg" src={campus.imageUrl} />
                  <h2>{campus.name}</h2>
                </div>
                <hr />
              </Link>
            </div>
          ))
        : `Couldn't find the campus with id ${campuses.id}`}
    </div>
  );
}
