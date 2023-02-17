import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async id => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`); //correct route
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {};
// might have to change this to an object

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleCampus = state => state.singleCampus;

export default singleCampusSlice.reducer;
