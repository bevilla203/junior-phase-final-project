import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCampus } from "../features/CreateCampus/createCampusSlice";

const NewCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
        event.preventDefault();
    try {
      dispatch(addCampus({ name, address }))
      console.log(`Campus Name: ${name} Campus Address: ${address}`);
      setCampusName("");
      setAddress("");
    } catch (e) {
      console.log(e);
    }


    dispatch(createNewCampus({ name, address }))
      .then(() => {
        console.log(name, address);
        setName("");
        setAddress("");
        setIsError("");
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      });
  };

  function handleAddressChange(event) {
    console.log("handlePasswordChange", event.target.value);
    setAddress(event.target.value)
    const isAddressThere = event.target.value
    setIsError(isAddressThere)
  }
  // adapted from TodoList-Solution-V3
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>New Campus Form</h2>
        <label>Campus Name:</label>
        <input
          type="text"
          className="form"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Campus Address:</label>
        <input
          type="text"
          className="form"
          value={address}
          onChange={handleAddressChange}
        />
        {isError ? (
          <p>
            <b>
              Please enter at least a campus name and address before submitting!
            </b>
          </p>
        ) : null}
        <br />
        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default NewCampus;
