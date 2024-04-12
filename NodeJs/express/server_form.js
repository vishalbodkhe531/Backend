const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",(req,res,next) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/form",(req,res,next)=>{
    res.send(`<h1>Welcome ${req.body.name} your accout </h1><h3>Successfully created</h3>`);  
    console.log(req.body);
})

const port = 4000;
app.listen(port,()=>{
    console.log(`The server is working on : ${port}`);
})