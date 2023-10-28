const Sequelize = require("sequelize");
const connection = require("../database/database");

const Produto = connection.define("tb_produtos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Produto;
