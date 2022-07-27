const {Sequelize} = require("sequelize");


const sequelize = new Sequelize("store", "postgres", "549950", {
    dialect: "postgres",
    host: "localhost"
});

module.exports = sequelize;