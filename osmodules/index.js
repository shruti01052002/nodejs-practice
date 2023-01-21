const os = require('os');
console.log(os.arch());
const frem = os.freemem();  //bytes
console.log(`${frem/1024/1024/1024}`); //gb
const tot = os.totalmem();
console.log(tot/1024/1024/1024);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());