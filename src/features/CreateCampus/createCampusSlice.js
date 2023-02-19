// adapted from TodoList-Solution-V3/src/features/editTodo/todoSlice.js
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createNewCampus = createAsyncThunk(
  "campuses/createNewCampus",
  async (newCampus) => { // newCampus is created here
    const response = await axios.post("/api/campuses", newCampus);
    return response.data;
  }
);

export const createCampusSlice = createSlice({
  name: "createCampus",
  initialState: {
    status: "idle",
    error: null,
    newCampus: null,
  },
  reducers: {
    addCampus: (state, action) => {
      state.newCampus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewCampus.fulfilled, (state, action) => {
        state.newCampus = action.payload;
      })
  },
});

export const { addCampus } = createCampusSlice.actions;
export default createCampusSlice.reducer;
