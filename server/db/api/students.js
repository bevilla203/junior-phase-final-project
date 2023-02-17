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
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Student.findByPk(req.params.id));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
