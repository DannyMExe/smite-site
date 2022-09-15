const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    isUnique: true,
    notEmpty: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
});

User.prototype.generateToken = function () {
  return { token: this.id };
};

User.byToken = async (token) => {
  try {
    const user = await User.findByPk(token);
    if (user) {
      return user;
    }
    const error = Error("Bad Credentials");
    error.status = 401;
    throw error;
  } catch {
    const error = Error("Bad Credentials");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (user) {
    return user;
  }
  const error = Error("Bad Credentials");
  error.status = 401;
  throw error;
};

module.exports = User;
