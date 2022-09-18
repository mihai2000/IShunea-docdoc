const express = require("express")
const app = express()
const mysql = require("mysql")
const bcrypt = require("bcrypt")
require("dotenv").config()
const DB_HOST = process.env.DB_HOST
const DB_username = process.env.DB_username
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const port = process.env.PORT

const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    username: DB_username,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})
app.use(express.json())
app.get('/', (req, res)=>{
    res.render('HomePage.tsx');
})
// app.post('/Inregistrare', (req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
//     let sql = 'INSERT INTO iShunea (id, username,password) VALUES(null,?,?)';
//     db.query(sql,[null,username,password] , function (err,result) {
//         console.log(err);
//     });
// });
//middleware to read req.body.<params>
//CREATE username
app.post("/Inregistrare", async (req,res) => {
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password,10);
    db.getConnection( async (err, connection) => {
        if (err) throw (err)
        const sqlSearch = "SELECT * FROM iShunea WHERE username = ?"
        const search_query = mysql.format(sqlSearch,[username])
        const sqlInsert = "INSERT INTO iShunea VALUES (0,?,?)"
        const insert_query = mysql.format(sqlInsert,[username, password])
        // ? will be replaced by values
        // ?? will be replaced by string
        await connection.query (search_query, async (err, result) => {
            if (err) throw (err)
            console.log("------> Search Results")
            console.log(result.length)
            if (result.length != 0) {
                connection.release()
                console.log("------> username already exists")
                res.sendStatus(409)
            }
            else {
                await connection.query (insert_query, (err, result)=> {
                    connection.release()
                    if (err) throw (err)
                    console.log ("--------> Created new username")
                    console.log(result.insertId)
                    res.sendStatus(201)
                })
            }
        }) //end of connection.query()
    }) //end of db.getConnection()
}) //end of app.post()
app.listen(port,
    ()=> console.log(`Server Started on port ${port}...`))
