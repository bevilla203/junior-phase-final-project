import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCampus } from "../features/CreateCampus/createCampusSlice";

const NewCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
  try {
    await e.preventDefault();
      dispatch(addCampus({ name, address }))
      console.log(name, address);
      setCampusName("");
      setAddress("");
      setError();
      } catch(error) {
      console.log(error);
      setError("Please enter a name and address");
    };

    dispatch(createNewCampus({ name, address }))
      .then(() => {
        console.log(name, address);
        setName("");
        setAddress("");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  // adapted from TodoList-Solution-V3
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>New Campus Form</h2>
        {/* need to add error handling */}
        {error && <div className="error">{error}</div>}
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
            onChange={(e) => setAddress(e.target.value)}
          />
        <br />
        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default NewCampus;
