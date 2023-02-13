const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
const campusRouter = require("./routes/campus");
const studentRouter = require("./routes/student")

// if URL starts w /students, use student.js
app.use("/student", studentRouter);

// if URL starts with /campus, use campus.js
app.use("/campus", campusRouter);

app.use(cors())

// volleyball logs middleware
app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// above middleware should make req.body work...

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

