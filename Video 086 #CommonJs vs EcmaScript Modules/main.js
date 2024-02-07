// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)

//default import from mymodule.js

// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)