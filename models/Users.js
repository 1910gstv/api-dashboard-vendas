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

User.associate = (models) => {
  User.belongsTo(models.Pedido, {foreignKey: 'id_usuario'})
}

module.exports = User;
