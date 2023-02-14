'use strict'

const db = require('./database')
const {Campus} = require('./models/Campus')
const {Student} = require('./models/Student')

Campus.hasMany(Student, {
  foreignKey: 'StudentId'
});
Student.belongsTo(Campus);

module.exports = {
  db,
  Campus,
  Student
}
