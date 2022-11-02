const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 1999;
const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "mkomko",
    database: "jobboard"
});

// REGISTER

app.post('/register', (req, res) => {
    const uid = req.body.uid;
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const status = req.body.status;
    console.log(req.body.password);
    // const secPassword = bcrypt.hash(req.body.password, 10);
    // console.log(secPassword);
    const password = req.body.password;

    db.query(
        "INSERT INTO users (name, username, email, password, status, uid) VALUES (?,?,?,?,?,?)",
        [name, username, email, password, status, uid],
        (err, result) => {
            if (err)
                console.log(err);
            else
                console.log("Insert into users: " + name + " " + username + " " + email + " " + password + " " + status + " " + uid);
        }
    )
})

// LOGIN

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const uid = req.body.uid;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err)
                res.send({ err: err })
            else
                if (result.length > 0) {
                    res.send(result);
                    console.log(uid)
                } else
                    res.send({ message: "Wrong username/password combination !" })
        }
    )
})

app.post('/checkStatus', (req, res) => {
    const email = req.body.email;

    db.query(
        "SELECT status FROM users WHERE email = ?",
        [email],
        (err, result) => {
            if (err)
                res.send({ err: err })
            else
                res.send(result)
        }
    )
})

// POST ADVERTISEMENT

app.post('/sendcard', (req, res) => {
    const uid = req.body.uid;
    const cid = req.body.cid;
    const jobtitle = req.body.jobtitle;
    const society = req.body.society;
    const city = req.body.city;
    const contract = req.body.contract;
    const salary = req.body.salary;
    const description = req.body.description;
    const email = req.body.email;

    db.query(
        "INSERT INTO card (uid, cid, jobtitle, society, city, contract, salary, description, email) VALUES (?,?,?,?,?,?,?,?,?)",
        [uid, cid, jobtitle, society, city, contract, salary, description, email],
        (err, result) => {
            if (err)
                console.log(err);
            else
                console.log("Insert into card: " + uid + jobtitle + society + city + contract + salary + description + email + cid);
        }
    )
})

// ADMIN USERS

app.put("/users/:id", (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    db.query(
        "UPDATE SET user name = ? username = ? where uid = ?",
        [name, username, uid],
        (err, ersult) => {
            if (err)
                console.log(err);
            else {
                res.send(result);
            }
        }
    )
})

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM users WHERE uid = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log("\n[ data deleted ]\n" + id + "\[ User ]\n")
        }
    });
})

// ADMIN ADVERTISEMENT

app.delete('/Advertisements/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM card WHERE cid = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log("\n[ data deleted ]\n" + id + "\n[ Advertisements ]\n")
        }
    });
})

app.get('/card', (req, res) => {
    db.query('SELECT * FROM card', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

// MESSAGE

app.get('/message/:uid', (req, res) => {
    const id = req.params.uid;
    db.query('SELECT * FROM message WHERE eid = ?', id, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

app.get('/message', (req, res) => {
    db.query('SELECT * FROM message', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

app.post('/message', (req, res) => {
    const eid = req.body.eid;
    const mid = req.body.mid;
    const jobtitle = req.body.jobtitle;
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log(eid)

    db.query(
        "INSERT INTO message (eid, mid, jobtitle, name, email, message) VALUES (?,?,?,?,?,?)",
        [eid, mid, jobtitle, name, email, message],
        (err, result) => {
            if (err)
                console.log(err);
            else
                console.log("Insert into message: " + eid + " " + mid + " " + jobtitle + " " + name + " " + email + " " + message);
        }
    )
})

app.delete('/allmessage/:mid', (req, res) => {
    const mid = req.params.mid;
    db.query("DELETE FROM message WHERE mid = ?", mid, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log("user " + mid + " data deleted")
        }
    });
})

app.delete('/message/:mid', (req, res) => {
    const mid = req.params.mid;
    db.query("DELETE FROM message WHERE mid = ?", mid, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log("user " + mid + " data deleted")
        }
    });
})

// PROFILE

app.delete('/profile/:uid', (req, res) => {
    console.log("test")
    const uid = req.params.uid;
    db.query("DELETE FROM users WHERE uid = ?", uid, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log("User " + uid + " data deleted")
        }
    });
})

app.post('/profile', (req, res) => {
    const uid = req.body.uid;
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const status = req.body.status;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (name, username, email, password, status, uid) VALUES (?,?,?,?,?,?)",
        [name, username, email, password, status, uid],
        (err, result) => {
            if (err)
                console.log(err);
            else
                console.log("Insert into users: " + name + " " + username + " " + email + " " + password + " " + status + " " + uid);
        }
    )
})

app.get('/mycard/:uid', (req, res) => {
    const uid = req.params.uid;
    db.query('SELECT * FROM card WHERE uid = ?', uid, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else
            console.log(err);
    })
})

app.delete('/mycard/:cid', (req, res) => {
    const cid = req.params.cid;
    db.query("DELETE FROM card WHERE cid = ?", cid, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log("user " + cid + " data deleted")
        }
    });
})

// LISTEN

app.listen(port, () => {
    console.log("server started on port " + port);
});
