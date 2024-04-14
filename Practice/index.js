import express from "express"
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.set("view engine","ejs")
app.set("views","./views");
app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.render("index",{
        title: "form"
    })
})


app.listen(4000,()=>{
    console.log(`Server is working on : http://localhost:4000`);
})