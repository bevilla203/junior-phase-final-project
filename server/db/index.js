const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/acme_schools_db");

const test = async () => {
    try {
        await db.authenticate();
        console.log("Auth worked!");
    } catch (e) {
        console.log(e);
    }
};
test();

const Campus = db.define("campus", {
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        allowEmpty: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING(500),
        defaultValue: "missing image"
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: false,
        allowEmpty: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    description: {
        type: Sequelize.TEXT('long')
    }
})
module.exports = Campus; // for some reason when
// i group exports at the bottom, it fails

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
    defaultValue: "missing image"
    },
    gpa: {
        type: Sequelize.DECIMAL(2,1),
        validate: {
            min: 0.0,
            max: 4.0
        }
  }
});
module.exports = Student;

Student.hasOne(Campus);
Campus.hasMany(Student);

module.exports = db;
