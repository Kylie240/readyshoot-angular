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

app.get("/products/featured", (req,res) => {
    const sql =  "SELECT * FROM products LIMIT 8";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

//users
app.post("/user/register", (req,res) => {
    const {firstName, lastName, email, username, password} = req.body;
    const query =  "INSERT INTO users (firstName, lastName, email, username, password) VALUES (?, ?, ?, ?, ?)";
    const values = [firstName, lastName, email, username, password];

    const emailQuery = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
    db.query(emailQuery, [email], (error, results) => {
    if (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const emailExists = results[0].count > 0;

    if (emailExists) {
        res.status(400).json({ error: 'Email already exists' });
      } else {
        const insertUserQuery = 'INSERT INTO users (FirstName, LastName, Email, Username, Password) VALUES (?, ?, ?, ?, ?)';
        db.query(insertUserQuery, [firstName, lastName, email, username, password], (insertError) => {
          if (insertError) {
            console.error('Error inserting user:', insertError);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
  
          res.status(200).json({ message: 'User registered successfully' });
        });
      }
    });
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