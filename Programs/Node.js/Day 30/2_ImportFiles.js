// require() : a built-in fucntion to include external modules that exist in separate files.
const importedValue = require("./2_ExportInFiles"); // values imported from 2_ExportInFiles

console.log(importedValue);
console.log(importedValue.sum(2,2));
console.log(importedValue.mul(3, 5));
