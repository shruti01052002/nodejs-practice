const fs = require("fs");

fs.writeFileSync('read.txt', "Hello I am Shruti");
fs.writeFileSync('read.txt', "Welcome to Nodejs");
fs.appendFileSync("read.txt", " Hello I am Shruti");
const buff_data = fs.readFileSync("read.txt"); //Buffer Data
const act_data = buff_data.toString();
console.log(act_data);
fs.renameSync("read.txt", "readwrite.txt")