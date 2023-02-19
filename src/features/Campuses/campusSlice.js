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
  reducers: {
    // we can't use regular reducers b/c our data is async
  },
  //extraReducers: references external actions(not generated in this slice.actions)
  extraReducers: builder => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = state => state.campuses;


export default campusesSlice.reducer;
