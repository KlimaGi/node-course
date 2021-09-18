const getNotes = require("./notes.js");
const msg = getNotes();
console.log(msg);

//const fs = require("fs");
// fs.appendFileSync(
//   "notes.js",
//   'const getNotes = function () { return "Your notes..."}'
// );

// const add = require("./utils");
// const sum = add(4, -2);
// console.log(sum);
