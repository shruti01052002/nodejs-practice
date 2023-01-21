const fs = require('fs');
fs.writeFile("readwrite.txt", "Hekkkiioohvghch", 
(err)=>{
    console.log("File created successfully.");
    console.log(err);
});

fs.appendFile("readwrite.txt", "fdchghkjhkjnjbnbn", (err)=>{console.log("File updated successfully")});
fs.readFile("readwrite.txt", "utf8", (err, data)=>{console.log("gjhbjknknk"); console.log(data)});
console.log("JKvhbnmj");

// JKvhbnmj
// File created successfully.
// null
// File updated successfully
// gjhbjknknk
// Hekkkiioohvghchfdchghkjhkjnjbnbn