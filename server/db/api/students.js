const router = require("express").Router();
const { Student } = require("../models/Student");
const { Campus } = require("../models/Campus");

//GET should show on localhost:3000/api/students
router.get("/", async(req, res, next) => {
    try {
        const allStudents = await Student.findAll({
      include: Campus
  });
      res.send(allStudents);
  } catch (e) {
      next(e)
  }
});

router.post("/student", (req, res) => {
  console.log(req.body);
  res.send("new student created!");
});

module.exports = router