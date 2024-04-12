import express from "express"
import path from "path"
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",(req,res,next) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
});


app.post("/api/v1/form",(req,res,next) =>{
    res.send(`<h1>Welcome ${req.body.name}</h1>`);
    console.log(req.body);
});

const port = 4000;
app.listen(port,()=>{
    console.log(`The server is working on this port : ${port}`);
});