//npm init
//package.json file will be created
const chalk = require("chalk");
const validator = require("validator");
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue.italic('Hello world!'));
console.log(chalk.blue.underline('Hello world!'));
console.log(chalk.blue.underline.inverse('Hello world!'));
const check = validator.isEmail("shruti@abes.ac.in");
console.log(check?chalk.green.inverse(check):chalk.red.inverse(check));
// C:\Users\shruti\Desktop\BuildBuddyAuth\server\node_modules\nodemon\bin