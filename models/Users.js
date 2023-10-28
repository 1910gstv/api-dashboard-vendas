const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define("tb_usuarios", {
  login: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
