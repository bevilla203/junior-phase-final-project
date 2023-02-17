const router = require("express").Router();
const { Campus, Student } = require("../../db");


//should show all campusi on localhost:3000/api/campuses
router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (e) {
    next(e);
  }
});

//GET api/campuses/:id
router.get('/:campusId', async (req, res, next) => {
  try {
    const id = req.params.campusId
    const campus = await Campus.findOne({
      where: {
        id:id
      },
      include: { model: Student }
    })
    res.send(campus)
  } catch(e) {
    next(e)
  }
})

module.exports = router;
