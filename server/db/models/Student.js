const Sequelize = require("sequelize");
const db = require("../database");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING(200),
    allowNull: false,
    allowEmpty: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  lastName: {
    type: Sequelize.STRING(200),
    allowNull: false,
    allowEmpty: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
    allowEmpty: false,
    validate: {
      notEmpty: true,
      notNull: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING(500),
    defaultValue:
      "http://www.quickmeme.com/img/d7/d7578f862475ecaf98064b381cda998a38409dea1123e07ba0b9babd34255360.jpg",
  },
  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});
module.exports = {Student};
