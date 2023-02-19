import React, { useState } from "react";
import { useDispatch } from "react-redux";

// adapted from React Forms Lecture -w- Tim
// error handling: form must have at least name and address
export default function AddCampus() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  // isError is used for inline validation
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleNameChange(event) {
    const tempName = event.target.value;
    setName(tempName);
    const nameCheck = !event.target.value
    setIsError(nameCheck);
  }

  function handleImageUrlChange(event) {
    const tempImageUrl = event.target.value;
    setImageUrl(tempImageUrl);
  }
    function handleAddressChange(event) {
      const tempAddress = event.target.value;
        setAddress(tempAddress);
        // const addressCheck = !event.target.address.value;
        // setIsError(addressCheck);
    }
  function handleDescriptionChange(event) {
    const tempDescription = event.target.value;
    setDescription(tempDescription);
  }

  return (
    <form className="CampusForm" onSubmit={handleSubmit}>
      {isError ? <p> Must provide name and address of campus</p> : <div />}
      <label>Campus Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
      ></input>
      <br />
      <label> Address:</label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={handleAddressChange}
      ></input>
      <br />
      <label> Image URL:</label>
      <input
        type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={handleImageUrlChange}
      ></input>
      <br />
      <label> Description:</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      ></input>
      <button type="submit"> Submit</button>
    </form>
  );
}
