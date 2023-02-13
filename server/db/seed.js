const db = require("./index");
const runSeed = async () => {
    await db.sync({ force: true });
    console.log("seed completed");
    process.kill(0);
    // should end sync process
}

// run npm run seed to seed database
runSeed();