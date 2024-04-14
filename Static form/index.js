import express from "express"
import bodyParser from "body-parser";
const app = express();
app.use(express.static("./public"));
app.use(express.json());
app.set("view engine","ejs")
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("index",{
        title: "Sing Up"
    });
})

app.post("/api.v1/login",(req,res)=>{
    const {name,email,password} = req.body
    res.json({
        name,email,password
    })
})

app.listen(4500,()=>{
    console.log(`Server is workking on : http://localhost:4500`);
})