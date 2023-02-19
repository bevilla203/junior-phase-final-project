const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

app.use(express.json()); // this needs to be before /api according to stackOverflow
//if url starts with api, use /api
app.use("/api", require("../server/db/api"))

app.use(cors())

// volleyball logs middleware
app.use(volleyball)

// body parsing middleware

app.use(express.urlencoded({extended: true}))
// above middleware should make req.body work...

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

