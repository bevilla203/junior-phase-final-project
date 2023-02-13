const express = require("express");
const router = express.Router();

//should show the text on page /campus
router.get("/", (req, res) => {
    res.send("this is where all the campuses will show")
})

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("new campus created!")
});

module.exports = router;