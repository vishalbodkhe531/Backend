import express from "express";

const app = express();

app.post("/",(req,res) =>{
    res.status(200).json({
        message : "Successfull"
    });
})

const port = 5000;
app.listen(port,()=>{
    console.log(`Sever is working on : http://localhost:${port}`);
});