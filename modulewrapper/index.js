( function(exports, require, module, __filename, __dirname){
    const fs = require('fs');
    const name = "Shruti";
    console.log(name);
    console.log(__filename);
    console.log(__dirname);
    module.exports = name;
}) //Module wrapper hidden Anonymous function  //Local scope for every module

// ( function(){
//     // const fs = require('fs');
//     const name = "Shruti";
//     console.log(name);
//     module.exports = name;
// })(); // Immediate Invoked function
console.log(__filename);
console.log(__dirname);