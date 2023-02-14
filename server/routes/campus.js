const express = require("express");
const router = express.Router();
const { Campus } = require("../db")

//should show the text on page /campus
router.get("/", async (req, res) => {
    const allCampuses = await Campus.findAll();
    res.send(allCampuses)
})

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("new campus created!")
});

module.exports = router;