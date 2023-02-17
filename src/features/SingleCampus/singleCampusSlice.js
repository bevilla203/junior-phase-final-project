import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async id => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`); //correct route
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);
const initialState = {};

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},
  // once again, we need extraReducers b/c we want to respond to
  // other action types
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      //1st arg = action type
      // 2nd arg = function that receives state and action
      return action.payload;
    });
  },
});

export default singleCampusSlice.reducer;
export const selectSingleCampus = state => state.singleCampus;


