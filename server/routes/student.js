const express = require("express");
const router = express.Router();
const { Student } = require("../db")

//should show the text on page /students
router.get("/", async(req, res) => {
  const allStudents = await Student.findAll();
  res.send(allStudents);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("new student created!");
});

module.exports = router;
