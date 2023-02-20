import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  try {
    const { data } = await axios.get(`/api/students`);
    return data;
  } catch (err) {
    console.error(`error while trying to display all students: ${err}`);
  }
});

// adapted from my own campusSlice
export const createStudentAsync = createAsyncThunk(
  "students/add",
  async ({ firstName, lastName, email, imageUrl, gpa, campusId }) => {
    try {
      const { data } = await axios.post("/api/students", {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
        campusId
      });
      return data;
    } catch (error) {
      console.error(`error while trying to add student: ${error}`);
      throw error;
    }
  }
);
export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudents",
  async (studentId) => {
    try {
      const { data } = await axios.delete(`api/students/${studentId}`);
      return data;
    } catch (error) {
      console.error(`error while trying to delete a student: ${error}`)
    }
  }
)
const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  //extraReducers: references external actions(not generated in this slice.actions)
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload; // should display students on screen
    });
    builder.addCase(createStudentAsync.fulfilled, (state, action) => {
      state.push(action.payload) // should add student
    });
    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (student) => student.id !== action.payload.id
      )
      return newState
    })
  },
});

export const selectStudents = state => state.students;

export default studentsSlice.reducer;
