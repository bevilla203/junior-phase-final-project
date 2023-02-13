'use strict'

const db = require('./database')
const {Campus} = require('./models/Campus')
const {Student} = require('./models/Student')

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Campus,
  Student
}
