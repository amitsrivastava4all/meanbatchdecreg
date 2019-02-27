const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./api/productapi'));
app.listen(process.env.PORT || 1234,(err=>{
    if(err){
        console.log("Server Not Start ",err);
    }
    else{
        console.log("Server Start");
    }
}))