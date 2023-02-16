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

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("new campus created!");
});

module.exports = router