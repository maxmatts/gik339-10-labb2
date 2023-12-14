const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const server = express();
const port = 3000;

let db = new sqlite3.Database(__dirname + '/../gik339-labb2.db');
//console.log(db.all("SELECT * FROM USERS"));

server.use(express.json())
.use(express.static('public'))
.use(express.urlencoded({extended: false}))
.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');

    next();
});

server.get('/users', (req, res) =>{
    let sql = "SELECT * FROM USERS";

    db.all(sql, (err, rows) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send(rows);
            console.log(rows);
        }
    });
    
});
console.log(__dirname);

server.get('/', (req, res) =>{
});


server.listen(port, () =>{
    console.log(`Server lyssnar på port: ${port}`);
});
