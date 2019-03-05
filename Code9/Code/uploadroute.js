const uploadRoute = require("express").Router();
uploadRoute.post('/uploadproduct',(req,res)=>{
    console.log("Inside Upload Post ");
    const xlsPath = req.file;
    console.log("Message is ",req.message, " XLS Path ",xlsPath, " Req ",req);
    if(!xlsPath){
        res.send('Attach File is Not an XLS');
    }
    else{
        res.send('File Uploaded...');
    }
});
module.exports = uploadRoute;