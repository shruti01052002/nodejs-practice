const fs = require('fs');
// fs.mkdir("something", (err)=>{console.log("Folder created")});
fs.writeFile("hello.txt", "Hello how are you", ()=>{console.log("njsm")});
fs.appendFile("hello.txt", " I am good", ()=>{console.log("File appended")});
fs.rename("hello.txt", "hi.txt", (err)=>console.log("filename changed"));
console.log(fs.readFile("hi.txt", "utf8", (err, data)=>{console.log(data)}));