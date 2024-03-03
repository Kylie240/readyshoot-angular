const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

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


app.listen(8080, () => {
    console.log("listening..")
})