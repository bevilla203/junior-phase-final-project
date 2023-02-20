const router = require("express").Router();
const { Campus, Student } = require("../../db");


//should show all campusi on localhost:3000/api/campuses
router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      order: [
        ["createdAt", "DESC"]
      ]
    });
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

// when a form is posted, the instance is created in the db
router.post("/", async (req, res, next) => {
  const {name, address} = req.body;
  try {
    const newCampus = await Campus.create({
      name: name,
      address: address,
    });
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

// delete route: api/campuses
// adapted from server/api/todos.js
router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
  } catch (error) {
    next(error)
  }
})

module.exports = router;
