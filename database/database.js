const Sequelize = require("sequelize");

const connection = new Sequelize("db_dashboard", "root", null, {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

module.exports = connection;