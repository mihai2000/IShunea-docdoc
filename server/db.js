const express = require("express")
const mysql=require('mysql');
const app = express();
app.use(express.json());
const db = mysql.createConnection({
    host:'localhost',
    user:'newuser',
    password:'mymihai-DAN2ac_ISSQL',
    database:'ishunea',
});
app.post('/Inregistrare', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query('INSERT INTO ishunea (username,password) VALUES(username, password)',
        [username,password],
        (err,result)=>{
        console.log(err);
        });
});
app.post('/ContulMeu',  (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        'SELECT * FROM ishunea WHERE username = ? AND password = ?',
        [username, password],
        (err,result)=> {
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
});
app.listen(3001, ()=> {
    console.log("running server");
});
