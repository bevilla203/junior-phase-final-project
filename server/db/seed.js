'use strict'
const Sequelize = require('sequelize')
const {db} = require("./index");
const { Student, Campus } = require('./index')
const { green, red } = require("chalk");

const campuses = [
  {
    name: "Rutgers University",
    address: "111 Fake Street, New Brunswick, NJ 09384",
    description:
      "A school with stuff known for being almost in the ivy leagues"
  },
  {
    name: "Kean University",
    address: "1000 Morris Ave, Union, NJ 07083",
      imageUrl: "kean.jpg",
    description:"A school known for making the best pizza makers in the world"
  },
];
const students = [
    {
        firstName: "Ben",
        lastName: "Villafranca",
        email: "fakeEmail@gmail.com",
        gpa: 4.0

    },
    {
        firstName: "Keanu",
        lastName: "Reeves",
        email: "kReeves@fake.com",
        gpa: 3.9
    },
    {
        firstName: "Ernest",
        lastName: "Hemingway",
        email: "e.hemingway@aol.com",
        gpa: 3.0
    }
]

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      students.map((student) => {
        return Student.create(student);
      })
    );
    
    await Promise.all(
      campuses.map((campus) => {
        return Campus.create(campus);
      })
    );
    console.log(green("Seeding worked!"));
    db.close();
  } catch (err) {
    console.error(red("Seeding failed... :("));
    console.error(err);
    db.close();
  }
};

seed();


// const runSeed = async () => {
//   await db.sync({ force: true });
//   console.log(chalk.green("seed completed"));
//   process.kill(0);
//   // should end sync process
// };
// // run npm run seed to seed database
// runSeed();