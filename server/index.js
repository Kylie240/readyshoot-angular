const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "readyshoot"
};

const connection = mysql.createConnection(dbConfig);

//products
app.get("/products", (req,res) => {
    const sql =  "SELECT * FROM products";

    connection.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.get("/products/featured", (req,res) => {
    const sql = "SELECT * FROM products limit 8";

    connection.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.get("/products/search", (req,res) => {
    const { type, startDate, endDate } = req.query;

    let sql = "SELECT * FROM Products";
    const params = [];
    
    if (type) {
      query += ' WHERE type = ?';
      params.push(type);
    }

    if (startDate && endDate) {
      query += ' AND product_id NOT IN (SELECT product_id FROM rentals WHERE ? <= endDate AND ? >= startDate)';
      params.push(endDate, startDate);
    }

    connection.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

//users
app.post("/user/register", (req,res) => {
    const {firstName, lastName, email, username, password} = req.body;

    if (!firstName || !lastName || !email || !username || !password) {
      res.json({ error: 'All fields must be filled' });
      return;
    }

    const query =  "INSERT INTO customers (firstName, lastName, email, username, password) VALUES (?, ?, ?, ?, ?)";
    const values = [firstName, lastName, email, username, password];

    const emailQuery = 'SELECT COUNT(*) AS count FROM customers WHERE email = ?';
    connection.query(emailQuery, [email], (error, results) => {
    if (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const emailExists = results[0].count > 0;

    if (emailExists) {
        res.json({ error: 'Email already exists' });
      } else {
        const insertUserQuery = 'INSERT INTO customers (FirstName, LastName, Email, Username, Password) VALUES (?, ?, ?, ?, ?)';
        connection.query(insertUserQuery, [firstName, lastName, email, username, password], (insertError) => {
          if (insertError) {
            console.error('Error inserting user:', insertError);
            res.json({ error: 'Internal Server Error' });
            return;
          }
  
          res.json({ success: 'User registered successfully. You can now login.' });
        });
      }
    });
})

app.post('/user/login', (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.json({ error: 'Email and password are required.' });
    }
  
    connection.query('SELECT * FROM customers WHERE email = ? AND password = ?', [email, password], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.json({ error: 'Internal server error.' });
      }
  
      if (results.length > 0) {
        return res.json({ success: 'Login successful!' });
      } else {
        return res.json({ error: 'Invalid username or password.' });
      }
    });
  });

app.listen(8080, () => {
    console.log("listening..")
})