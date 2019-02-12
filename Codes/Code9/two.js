const fs = require("fs");
const path = require("path");
var fullPath = path.join(__dirname+"/score.txt");
console.log("Path ",path.parse(fullPath));
console.log("Base ",path.basename(fullPath));
console.log("Nor ",path.normalize(fullPath+"/../.."));
console.log("Dir  ",path.dirname(fullPath));

fs.watchFile(fullPath,(curr, prev)=>{
    fs.readFile(fullPath,(e,c)=>{
        console.log("New Change Happen "+c);
    })
    //console.log("Watch Happen....");
})