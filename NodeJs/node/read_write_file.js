const fs = require("fs");

const a = "Hi Vishal";
fs.writeFile("./sample.txt",a,()=>{
    console.log("Written");
});

fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})