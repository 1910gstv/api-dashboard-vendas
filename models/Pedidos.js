const Sequelize = require('sequelize');
const connection = require('../database/database');
const { type } = require('os');

const Pedido = connection.define('tb_pedidos', {
    qtd: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_pedido: {
        type: Sequelize.DATE,
        allowNull: false
    },
    valor_total : {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    id_usuario : {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'},
        allowNull: false
    },
    id_produto : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_cliente : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status : {
        type: Sequelize.INTEGER,
        allowNull: false
    } 
})

Pedido.associate = (models) => {
    Pedido.hasOne(models.User, {foreignKey: 'id_usuario'})
}

module.exports = Pedido