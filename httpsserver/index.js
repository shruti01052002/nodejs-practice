const http = require('http');
const fs = require('fs');
// server.on("request", (req, res)=>{});
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url=="/") res.end("Hello from home side");
    else if(req.url=="/contact")res.end("Hello from contact side");
    else if(req.url=="/sample") {
        fs.readFile(`./Sample.json`, 'utf-8', (err, data)=>{
            // console.log(err);
            res.writeHead(200, {"content-type":"application/json"})
            res.end(data);
        })
    }
    else if(req.url=="/stream") {
        const rstream = fs.ReadStream('input.txt');
        // rstream.pipe(res); //Read Write in one line //passing destination where we want to write data
        rstream.on('data', (chunkdata)=>{
            res.write(chunkdata);
        }) //Jab tk data aa rha h read krte rho
        rstream.on('end', ()=>{
            res.end(); //data read hona band ho gya
        })
        rstream.on('error', (err)=>{
            console.log(err);
            res.end("File not found");
        });
    }
    else {
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1>404 error page. Page doesn't exist</h1>");
    }
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("I am listening to the server");
})