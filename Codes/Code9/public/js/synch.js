const fs = require('fs');
console.log('Before');
var r = fs.readFileSync(__filename);
console.log("R is "+r);
console.log('After');
