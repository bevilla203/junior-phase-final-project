const port = process.env.PORT || 3000;
const app = require('./app');
const db = require("./db") // should direct to index.js
const express = require("express");



const startServer = async () => {
    await db.sync();
    app.listen(port, () => {
        console.log(`Server is now running on port ${port}`);
    });
}
startServer();
