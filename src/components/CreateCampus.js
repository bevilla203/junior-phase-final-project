import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampusAsync } from "../features/Campuses/campusSlice";

//adapted from todSlice.js in given solution key
// error-handling adapted from 
const CreateCampus = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isError, setIsError] = useState(false)

  function handleNameChange(event) {
    setName(event.target.value)
    setIsError(!address)
  }
  function handleAddressChange(event) {
    setAddress(event.target.value)
    setIsError(!name); // if name is empty, it should show error msg
  }

  const handleSubmit = (eve) => {
    eve.preventDefault(); // prevents browser refresh
    dispatch(createCampusAsync({ name, address }));
    setName("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label> Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className="form-group">
        <label> Address: </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      {isError ? <p>Please enter a Campus name and address before continuing</p> : null}
      <button type="submit">Add Campus</button>
    </form>
  );
};

export default CreateCampus;
