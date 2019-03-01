const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(4444,()=>{
    console.log("Front End Server Start");
})