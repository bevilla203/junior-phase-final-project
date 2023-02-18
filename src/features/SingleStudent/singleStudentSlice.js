import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudent = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`); //correct route
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

const initialState = {}
;

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState,
  reducers: {},
  // once again, we need extraReducers b/c we want to respond to
  // other action types
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      //1st arg = action type
      // 2nd arg = function that receives state and action
      return action.payload;
    });
  },
});

export default singleStudentSlice.reducer;
export const selectSingleStudent = (state) => state.singleStudent;