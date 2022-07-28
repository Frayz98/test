const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();
const sequelize = require("./db");

const users = require('./routes/User');

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Work!')
});

async function start() {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log("Соединение с бд установлено");
        app.listen(PORT, () => {
            console.log(`Start server on ${PORT} port`)
        });
    } catch (e) {
        console.log("Ошибка");
    }
}

start().then();
