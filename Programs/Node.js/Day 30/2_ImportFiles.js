// require() : a built-in fucntion to include external modules that exist in separate files.
// const importedValue = require("./2_ExportInFiles"); // values imported from 2_ExportInFiles

// In ES6 version of JS, we can use import instead of require
// For using impory we have to use npm init and make a package.json file
// Then we will have to add a new key value pair in the package.json file
// "type": "module"

// We can also import selected values from exported values but in require all the data present in the file is imported
// Loading is synchronous for 'require' but can be asynchronous for 'import'
// We should use only one of the both import or require
import{sum, Pi} from "./2_ExportInFiles.js";

console.log(sum(2,2));
// console.log(importedValue.mul(3, 5));

// random-words package is installed through which we can import random words
import{generate} from "random-words";
console.log(generate());
