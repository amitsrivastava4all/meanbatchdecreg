const fs = require("fs");
console.log("File Name is ",__filename);
console.log("Before Calling read file ");
/*function done(error, content){
if(error){
    console.log("Error During file read...");
}
else{
    console.log("Content is "+content);
}
}
fs.readFile(__filename,done);*/
console.log(__dirname);
fs.readFile(__filename,(err, content)=>{
    if(err){
        console.log("Error During file read...");
    }
    else{
        console.log("Content is "+content);
    }
})
console.log("After Calling read file I am Doing something else...");
//fs.readFile("/Users/amit/Documents/JSCodesRegJan/nodedemos/demo3.js")