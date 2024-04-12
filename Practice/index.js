import express from "express"
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("index",{
        title : "Home",
        msg : "This is Home-Page"
    })
});

app.get("/about",(req,res)=>{
    res.render("index",{
        title: "about",
        msg : "This is about-page"
    })
});

app.get("/api/v1/form",(req,res)=>{
    res.render("form",{
        title : "form"
    })
});

app.post("/api/v1/new",(req,res) =>{
    const {name,email,password} = req.body;
    console.log(req.body);
    res.render("data",{
        title : "data",
        name,email,password
    })
})


app.listen(4000,()=>{
    console.log(`Server is woking on : http://localhost:4000`);
})