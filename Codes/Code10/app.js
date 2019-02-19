const express = require("express");
const app =  express();
const bodyParser = require("body-parser");
const loadTables= require("./utils/loadmodels");
loadTables();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',require("./routes/user"));
app.use('/products',require("./routes/product"));
app.use((request, response,next)=>{
    response.send('U Type Something Wrong...');
})

app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Server Started At 1234");
    }
})
