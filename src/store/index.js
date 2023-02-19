import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "../features/Campuses/campusSlice";
import studentSlice from "../features/Students/studentSlice";
import singleCampusSlice from "../features/SingleCampus/singleCampusSlice";
import singleStudentSlice from "../features/SingleStudent/singleStudentSlice";
import createCampusReducer from "../features/CreateCampus/createCampusSlice";

const store = configureStore({
  reducer: {
    campuses: campusSlice,
    students: studentSlice,
    singleCampus: singleCampusSlice,
    singleStudent: singleStudentSlice,
    createCampus: createCampusReducer,
  },
});

export default store;
