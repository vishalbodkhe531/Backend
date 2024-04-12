const http = require("http");
const server = http.createServer((requist,responce,next) =>{
    responce.end("working");
});
const port=2000
const hostname="localhost"
server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port}`);
})