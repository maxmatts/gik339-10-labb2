const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require("fs").promises;
const server = express();
const port = 3000;
const path = require("path");

let db = new sqlite3.Database(__dirname + '/../gik339-labb2.db');
//console.log(db.all("SELECT * FROM USERS"));

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
            console.log(rows);
        }
    });
    
});
console.log(__dirname);

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

server.get('/client/scripts.js', (req, res) =>{
    res.sendFile(path.join(__dirname, "../scripts/script.js"));
});

//server.get('/', (req, res) =>{
//	fs.readFile(__dirname + '/../client/index.html')
//		.then(
//			function(contents)
//			{
//				res.setHeader("Content-Type", "text/html");
//				res.writeHead(200);
//				res.end(contents);
//				console.log(`url = ${req.url}`);
//			},
//			function(error)
//			{
//				res.writeHead(404);
//				res.end();
//				//res.end("assint nö");
//				console.log(`404 error at url = ${req.url}`);
//			}
//	    	)
//});


server.listen(port, () =>{
    console.log(`Server lyssnar på port: ${port}`);
});
