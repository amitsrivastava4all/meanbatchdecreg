const mongoose = require("mongoose");
const dbConfig = require("../utils/config").dbConfig;
mongoose.connect(dbConfig,{poolSize:10},(err)=>{
    if(err){
        console.log("Can't Create DB Connection ");
    }
    else{
    console.log("Connection Created...");
    }
});
module.exports = mongoose;
