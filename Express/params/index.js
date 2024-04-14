import express from "express"

const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
});

app.get("/profile/:UserName",(req,res)=>{
    res.send(`<h1>Hello ${req.params.UserName}</h1>`);
});

app.listen(4000,()=>{
    console.log(`the server is working on : http://localhost:4000`);
})