const sessionCheck = (req,res, next)=>{
    if(req.session && req.session.userid){
        next();
    }
    else{
        const path = require("path");
        var currentPath = path.normalize(__dirname+"/..");
        console.log("Current Path is ",currentPath);
        var fullPath = path.join(currentPath,"public/login.html");
        console.log("Full Path is ",fullPath);
        res.sendFile(fullPath);
    }
}
module.exports = sessionCheck;