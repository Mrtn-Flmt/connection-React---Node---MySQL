const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 1999;

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
            if (err)
                console.log(err);
            else
                console.log("Insert into users: " + name + username + email + password);
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
            if (err)
                res.send({ err: err })
            else
                if (result.length > 0)
                    res.send(result)
                else
                    res.send({ message: "Wrong username/password combination !" })
        }
    )
})

app.listen(port, () => {
    console.log("server started on port " + port);
});
