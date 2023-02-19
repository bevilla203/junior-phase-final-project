import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStudentAsync } from "../features/Students/studentSlice";

//adapted from todSlice.js in given solution key
// error-handling adapted from 
const CreateStudent = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGpa] = useState("");
  const [campusId, setCampusId] = useState("");
    const [isError, setIsError] = useState(false);
    
    const handleSubmit = (eve) => {
      eve.preventDefault(); // prevents browser refresh
      dispatch(createStudentAsync({ firstName, lastName, email, imageUrl, gpa, campusId }));
      setFirstName("");
      setLastName("");
      setImageUrl("");
      setGpa("");
      setCampusId("");
    };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label> First name: </label>
        <input
          required
          type="text"
          id="firstName"
          value={firstName}
          onChange={(eve) => {
            setFirstName(eve.target.value);
            setIsError(!firstName || !lastName || !email);
          }}
        />
      </div>
      <div className="form">
        <label> Last Name: </label>
        <input
          required
          type="text"
          id="lastName"
          value={lastName}
          onChange={(eve) => {
            setLastName(eve.target.value);
            setIsError(!firstName || !lastName || !email);
          }}
        />
      </div>
      <div className="form">
        <label> Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(eve) => {
            setEmail(eve.target.value);
            setIsError(!firstName || !lastName || !email);
          }}
        />
      </div>
      <div className="form">
        <label> imageURL: </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(eve) => {
            setImageUrl(eve.target.value);
            setIsError(!firstName || !lastName || !email);
          }}
        />
      </div>
      <div className="form">
        <label> GPA: </label>
        <input
          type="number"
          id="gpa"
          value={gpa}
          onChange={(eve) => {
            setGpa(eve.target.value);
            setIsError(!firstName || !lastName || !email);
          }}
        />
      </div>
      <div className="form">
        <label> Campus ID: </label>
        <input
          type="number"
          id="campusId"
          value={campusId}
          onChange={(eve) => {
            setCampusId(eve.target.value);
            setIsError(!firstName || !lastName || !email);
          }}
        />
      </div>
      {isError ? (
        <p>
          Please enter Student's first name, last name, and email before
          continuing
        </p>
      ) : null}
      <button type="submit">Add Student</button>
    </form>
  );
};

export default CreateStudent;