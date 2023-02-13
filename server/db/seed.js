'use strict'
const Sequelize = require('sequelize')
const {db} = require("./index");
const { Student, Campus } = require('./index')
const chalk = require("chalk");
const { green, red } = require("chalk");




// const student1 = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "jdoe@yahoo.com",
//     gpa: 2.5
// }
// const Students = [
//     {
//         firstName: "Ben",
//         lastName: "Villafranca",
//         email: "fakeEmail@gmail.com",
//         gpa: 4.0

//     },
//     {
//         firstName: "Keanu",
//         lastName: "Reeves",
//         email: "kReeves@fake.com",
//         gpa: 3.9
//     }
// ]

// const seed = async () => {
//   try {
//     await db.sync({ force: true });

//     const user = await Student.create({firstName: "John", lastName: "Doe", email: "jdoe@yahoo.com", gpa: 2.5});


//     console.log(green("Seeding success!"));
//     db.close();
//   } catch (err) {
//     console.error(red("Oh noes! Something went wrong!"));
//     console.error(err);
//     db.close();
//   }
// };

// seed();


const runSeed = async () => {
  await db.sync({ force: true });
  console.log(chalk.green("seed completed"));
  process.kill(0);
  // should end sync process
};

// run npm run seed to seed database
runSeed();