const fs = require("fs");
console.log("Before");
var stream = fs.createReadStream("/Volumes/AmitPassPort/JasmineKarmaFactoryTesting.mov");
stream.on('data',(chunk)=>{
    console.log("Chunk", chunk);
})
stream.on('end',()=>{
    console.log("End .... ");
})
// fs.readFile("/Volumes/AmitPassPort/JasmineKarmaFactoryTesting.mov",(err,content)=>{
//     if(err){

//     }
//     else{
//         console.log(content);
//     }
// })
console.log("After");