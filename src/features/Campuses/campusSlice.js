import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  try {
    const { data } = await axios.get(`/api/campuses`);
    return data;
  } catch (err) {
    console.error(`error while trying to display all campuses: ${err}`);
  }
});

export const createCampusAsync = createAsyncThunk(
  "campuses/add",
  async ({ name, address, imageUrl, description }) => {
    try {
      const { data } = await axios.post("/api/campuses", {
        name,
        address,
        imageUrl,
        description,
      });
      return data;
    } catch (error) {
      console.error(`error while trying to add campus: ${error}`);
    }
  }
);

// adapted from features/todos/todosSlice, deleteTodoAsync
export const deleteCampusAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (id) => {
    try {
      const { data } = await axios.delete(`api/campuses/${id}`);
      return data;
    } catch (err) {
      console.error(`error while trying to delete Campus: ${err}`);
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
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload; // should pull campuses from db
    });
    builder.addCase(createCampusAsync.fulfilled, (state, action) => {
      state.push(action.payload); // should add a campus
    });
    builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (campus) => campus.id !== action.payload.id
      );
      return newState;
    });
  },
});

export const selectCampuses = state => state.campuses;

export default campusesSlice.reducer;
