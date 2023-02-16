import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  try {
    const { data } = await axios.get(`/api/students`);
    console.log("succeeded in retrieving students");
    return data;
  } catch (err) {
    console.error(err);
  }
});

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  //extraReducers: references external actions(not generated in this slice.actions)
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
