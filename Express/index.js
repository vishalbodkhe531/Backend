import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views","./views");

app.get("/",(req,res) =>{
    res.render("index",{
        title:"Home",
        msg:"this is home page"
    });
})

app.get("/about",(req,res) =>{
    res.render("index",{
        title:"About",
        msg:"this is About page"
    });
})

app.get("/register",(req,res)=>{
   res.render("register",{
    title: "Registation form",
   });
});

app.post("/api/v1/new",(req,res)=>{
    console.log(req.body);
    const {name,email,password} = req.body
    res.render("data",{
        title:"User Data",
        name,email,password
    })
})

const port  = 4000;
app.listen(port,()=>{
    console.log(`server is working on : http://localhost:${port}`);
})