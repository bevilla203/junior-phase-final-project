const router = require("express").Router();
const { Campus } = require("../models/Campus");

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
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Campus.findByPk(req.params.id));
  } catch(e) {
    next(e)
  }
})

module.exports = router;
