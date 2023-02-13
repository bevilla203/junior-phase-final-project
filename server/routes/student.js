const express = require("express");
const router = express.Router();

//should show the text on page /students
router.get("/", (req, res) => {
  res.send("this is where all the STUDENTS will show");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("new student created!");
});

module.exports = router;
