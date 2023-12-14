const express = require('express');
const server = express();
const port = 3000;

server.use(express.json())
.use(express.urlencoded({extended: false}))
.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');

    next();
});

server.get('/users', (req, res) =>{
    res.send("Välkommen till users");
});


server.listen(port, () =>{
    console.log(`Server lyssnar på port: ${port}`);
});