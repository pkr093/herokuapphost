const http=require("http");
const fs=require('fs');
const file=fs.readFileSync('index.html');

const server=http.createServer((req,res)=>{
    // res.statusCode=200;
    res.writeHead(200,{'Content-type':'text/html'});
    // res.setHeader('constant-type','text/html');
    res.end(fs);
});

server.listen(80,"127.0.0.1",()=>{
    console.log(`listening to the port 80`);
});