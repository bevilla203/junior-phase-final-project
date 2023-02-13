const port = process.env.PORT || 3000;
const app = require('./app');
const db = require("./db") // should direct to index.js
const campusRouter = require("./routes/campus");
const express = require("express");

app.use("/campus", campusRouter);
// added for easier routing to /campus

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// the above should make req.body work
const startServer = async () => {
    await db.sync();
    app.listen(port, () => {
        console.log(`Server is now running on port ${port}`);
    });
}
startServer();
