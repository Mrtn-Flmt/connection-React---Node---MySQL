const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "mkomko",
    database: "jobboard"
});

app.post('/register', (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (name, username, email, password) VALUES (?,?,?,?)",
        [name, username, email, password],
        (err, result) => {
            console.log(err);
        }
    )
})

app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: "Wrong username/password combination !" })
            }
        }
    )
})

app.listen(1999, () => {
    console.log("server started on port 1999");
});