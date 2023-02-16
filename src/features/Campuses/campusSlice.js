import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  try {
      const { data } = await axios.get(`/api/campuses`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  //extraReducers: references external actions(not generated in this slice.actions)
  extraReducers: builder => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = state => state.campuses;


export default campusesSlice.reducer;
