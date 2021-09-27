const config = require('./config.json');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express()

let ip = ''

let autenticado = false

const connection = mysql.createConnection({
    host: config.database.HOST,
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.listen(21262, () => {
    console.log(`Express started at http://api.feijonts.com:21262/`)
})

app.get('/:ip',(req, res) => {
    ip = req.params.ip
    connection.query(`SELECT * FROM users WHERE ip = '${ip}'`, function (err, result, fields) {
        if (err) throw err;
        if (autenticado) {
            autenticado = false
        }
        if (result[0]) {
            autenticado = true
        }
        return res.json(autenticado)
    });
})