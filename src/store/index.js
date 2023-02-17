import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "../features/Campuses/campusSlice";
import studentSlice from "../features/Students/studentSlice";
import singleCampusSlice from "../features/SingleCampus/singleCampusSlice"

const store = configureStore({
  reducer: {
    campuses: campusSlice,
    students: studentSlice,
    singleCampus: singleCampusSlice
  },
});

export default store;
