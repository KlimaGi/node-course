const chalk = require("chalk");

const getNotes = require("./notes.js");
const msg = getNotes();
console.log(msg);

console.log(chalk.green("Success!"));
console.log(chalk.bold("Success!"));
console.log(chalk.green.inverse("Success!"));
console.log(chalk.bgCyan("Success!"));
//console.log(validator.isEmail("er.com"));
//console.log(validator.isURL("https/mead.io"));
