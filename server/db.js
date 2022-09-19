const express = require("express")
const mysql=require('mysql');
const app = express();
require("dotenv").config()
app.use(express.json());
const DB_HOST = process.env.DB_HOST
const DB_username = process.env.DB_username
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const port = process.env.PORT
const db = mysql.createConnection({
            host: DB_HOST,
            username: DB_username,
            password: DB_PASSWORD,
            database: DB_DATABASE,
            port: DB_PORT
});
app.post('/Inregistrare', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let sql = 'INSERT INTO iShunea (id, username,password) VALUES(null,?,?)';
    db.query(sql,[null,username,password] , function (err,res) {
        console.log(err);
        });
});
app.post('/ContulMeu',  (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if (username && password){
    let sql = "SELECT * FROM iShunea WHERE username = ? AND password = ?";
    db.query(sql, [username, password], function (err, result) {
            if (err) {
                res.send({err: err});
            }
            if (result.length>0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password combination"});
            }
        }
    );
    }
});
app.listen(port, ()=> {
    console.log(`Server Started on port ${port}...`);
});
