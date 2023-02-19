const router = require("express").Router();
const { Student, Campus } = require("../../db");

//GET should show on localhost:3000/api/students
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({
      include: Campus,
    });
    res.send(allStudents);
  } catch (e) {
    next(e);
  }
});

// GET should show individual person on localhost:3000/api/students/:id
router.get("/:studentId", async (req, res, next) => {
  try {
    const id = req.params.studentId;
    // findOne: obtains first entry found that fulfills options
    const student = await Student.findOne({
      where: {
        id: id,
      },
      include: { model: Campus }
    });
    res.send(student);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
  try {
    const newStudent = await Student.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl: imageUrl,
      gpa: gpa,
      campusId: campusId
    })
    res.json(newStudent);
  } catch (err) {
    console.log(err);
    next(err)
  }
})
module.exports = router;
