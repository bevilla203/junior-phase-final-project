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
    const student = await Student.findOne({
      where: {
        id: id,
      }
    });
    res.send(student);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
