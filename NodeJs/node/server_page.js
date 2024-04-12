const http = require("http");
const fs = require("fs");

 const home = fs.readFileSync("./index.html","utf-8");
const server = http.createServer((require,res,next)=>{
    if(require.url === home){
        return res.end(`<h1>This is Home section</h1>`);
    }else if(require.url === "/about"){
        return res.end(`<h1>This is About section</h1>`);
    }else{

    }
});

const port = 2000;
const hostname = "localhost";
server.listen(port,hostname,()=>{
    console.log(`server is runing on : http://${hostname}:${port}`);
})