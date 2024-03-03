const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "readyshoot"
})

//products
app.get("/products", (req,res) => {
    const sql =  "SELECT * FROM products";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

//users
app.post("/user/register", (req,res) => {
    const user = req.body;
    const query =  "SELECT firstName, lastName, email, username, password FROM users where email=?";

    db.query(query, [user.email], (err, results) => {
        res.status(200).json({ success: 'help' });
        if(!err) {
            res.status(200).json({ success: 'help' });
            if(results.length <= 0){
                query = 'INSERT into users (firstName,lastName,email,username,password) values(?,?,?,?,?)'
                db.query(query,[user.firstname,user.lastname,user.email,user.username,user.password],(err,data) => {
                    if(!err){
                        return res.status(200).json({message: "Successfully Registered"})
                    }
                    else{
                        return res.status(500).json(err);
                    }
                })
            } 
            else{
                return res.status(400).json({message: "Email already exists."})
            }
        }
        return res.json("Error");
    })
})

app.post('/user/login', (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }
  
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).json({ error: 'Internal server error.' });
      }
  
      if (results.length > 0) {
        return res.status(200).json({ success: 'Login successful!' });
      } else {
        return res.status(401).json({ error: 'Invalid username or password.' });
      }
    });
  });

app.listen(8080, () => {
    console.log("listening..")
})