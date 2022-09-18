let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mymihai-DAN2ac_ISSQL",
    database: "iShunea"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO iShunea (username, password) VALUES ('Mihai', 'password')";
    con.query(sql , function (err, result) {
        if (err) throw err;
        console.log("top secret");
        console.log(result);
    });
});

