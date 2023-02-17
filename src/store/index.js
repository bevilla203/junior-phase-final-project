import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "../features/Campuses/campusSlice";
import studentSlice from "../features/Students/studentSlice";
import singleAuthorSlice from "../features/SingleCampus/SingleCampusSlice"

const store = configureStore({
  reducer: {
    campuses: campusSlice,
    students: studentSlice,
    singleAuthor: singleAuthorSlice
  },
});

export default store;
