const Sequelize = require("sequelize");
const db = require("../database");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    allowEmpty: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING(500),
    defaultValue:
      "http://www.quickmeme.com/img/d7/d7578f862475ecaf98064b381cda998a38409dea1123e07ba0b9babd34255360.jpg",
  },
  address: {
    type: Sequelize.STRING(100),
    allowNull: false,
    allowEmpty: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});
module.exports = {Campus};