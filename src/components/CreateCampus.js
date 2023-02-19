import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampusAsync } from "../features/Campuses/campusSlice";

//adapted from todSlice.js in given solution key
// error-handling adapted from 
const CreateCampus = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(false)

  function handleNameChange(event) {
    setName(event.target.value)
    setIsError(!address || !name) // if address is empty, it should show error msg
  }
  function handleAddressChange(event) {
    setAddress(event.target.value)
    setIsError(!name || !address); // if name is empty, it should show error msg
  }

  const handleSubmit = (eve) => {
    eve.preventDefault(); // prevents browser refresh
    dispatch(createCampusAsync({ name, address, imageUrl, description }));
    setName("");
    setAddress("");
    setImageUrl("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label> Name: </label>
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form">
        <label> Address: </label>
        <input
          required
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div className="form">
        <label> Image URL: </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(eve) => {
            setImageUrl(eve.target.value)
            setIsError(!address || !name);
          }}
        />
      </div>
      <div className="form">
        <label> Description: </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(eve) => {
            setDescription(eve.target.value)
            setIsError(!address || !name);
          }}
        />
      </div>
      {isError ? (
        <p>Please enter a Campus name and address before continuing</p>
      ) : null}
      <button type="submit">Add Campus</button>
    </form>
  );
};

export default CreateCampus;
