const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const server = express();
const port = 3000;
const path = require("path");

let db = new sqlite3.Database(__dirname + '/../gik339-labb2.db');

server.use(express.json())
.use("/", express.static(path.resolve(__dirname, 'public')))
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
        }
    });
    
});

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

server.get('*', (req,res) =>{
    res.send("404, vart är du någonstans?");
});

server.listen(port, () =>{
    console.log(`Server lyssnar på port: ${port}`);
});
