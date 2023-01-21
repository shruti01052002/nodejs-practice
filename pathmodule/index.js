const path = require('path');
console.log(path.dirname("C:/Users/shruti/Desktop/Nodejstut/nodejs-practice/pathmodule/index.js")); //forward slash id reqired
console.log(path.extname("C:/Users/shruti/Desktop/Nodejstut/nodejs-practice/pathmodule/index.js")); 
console.log(path.basename("C:/Users/shruti/Desktop/Nodejstut/nodejs-practice/pathmodule/index.js")); 
console.log(path.parse("C:/Users/shruti/Desktop/Nodejstut/nodejs-practice/pathmodule/index.js")); // root, dir, base, ext, name
console.log(path.parse("C:/Users/shruti/Desktop/Nodejstut/nodejs-practice/pathmodule/index.js").root);