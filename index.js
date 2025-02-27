const express = require('express');
const fs=require('fs');
const server=express();
const path=require('path');
 
server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res)=>{
   
    fs.readdir(`./files`, (err, files)=>{
        res.render("index", {files: files});
    }

    )
});

server.post("/create", (req, res)=>{
   
        fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.detail, (err)=>{
            res.redirect('/');
        })
});


server.listen(8000, ()=>{
    console.log("server is running")
});