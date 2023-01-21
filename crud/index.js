const fs = require('fs');

// fs.mkdirSync('shruti');
fs.writeFileSync("shruti/bio.txt", "Hello I am Shruti Yadav");
fs.appendFileSync("shruti/bio.txt", " I am Learning Nodejs");
const buff = fs.readFileSync("shruti/bio.txt", "utf8");
console.log(buff.toString());
console.log(buff);
fs.renameSync("shruti/bio.txt", "shruti/mybio.txt");

// fs.unlinkSync("shruti/mybio.txt");    to delete the file
// fs.rmdirSync("shruti");      to delete the folder