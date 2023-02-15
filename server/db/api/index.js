// I should create my routes here
const router = require('express').Router()
const { Campus } = require("../models/Campus");
const { Student } = require("../models/Student");

//should show all campusi on localhost:3000/api/campusi
router.get('/campus', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({
            include: Student
        })
        console.log("Found 'em!");
        res.send(campuses);
    } catch (e) {
        next(e);
    }
})


router.post("/campus", (req, res) => {
    console.log(req.body);
    res.send("new campus created!")
});

//should show the text on page /students
router.get("/student", async(req, res, next) => {
  try {const allStudents = await Student.findAll();
      res.send(allStudents);
  } catch (e) {
      next(e)
  }
});

router.post("/student", (req, res) => {
  console.log(req.body);
  res.send("new student created!");
});
module.exports = router;