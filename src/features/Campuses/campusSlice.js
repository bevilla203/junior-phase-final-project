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

export const createCampusAsync = createAsyncThunk(
  "campuses/add",
  async ({ name, address }) => {
    try {
      const { data } = await axios.post("/api/campuses", {
        name,
        address
      });
      return data;
    } catch (error) {
      console.error("error occurred while trying to create campus: ", error);
      throw error; 
    }
  }
);

const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {
    // we can't use regular reducers b/c our data is async
  },
  //extraReducers: references external actions(not generated in this slice.actions)
  extraReducers: builder => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload; // should pull campuses from db
    });
     builder.addCase(createCampusAsync.fulfilled, (state, action) => {
       state.push(action.payload); // should add a campus
     });
  },
});

export const selectCampuses = state => state.campuses;


export default campusesSlice.reducer;
