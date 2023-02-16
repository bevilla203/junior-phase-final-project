import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "../features/Campuses/campusSlice";
import studentSlice from "../features/Students/studentSlice";

const store = configureStore({
  reducer: {
    campuses: campusSlice,
    students: studentSlice
  },
});

export default store;
