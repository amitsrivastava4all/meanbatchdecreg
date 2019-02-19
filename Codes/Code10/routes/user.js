const express = require("express");
const userRoutes = express.Router();
userRoutes.get('/search',(request,response)=>{
    response.send('User Search Called..');
})
userRoutes.get('/login',(req,response)=>{
    console.log(req.query);
    var userid  = req.query.userid;
    var pwd = req.query.pwd;
    if(userid == pwd){
        response.send('Welcome '+userid);
    }
    else{
        response.send('Invalid Userid or Password');
    }

})

userRoutes.post('/login',(req,response)=>{
   console.log("Body is ",req.body); 
   var userid  = req.body.userid;
   var pwd = req.body.pwd;
   if(userid == pwd){
       response.send('Welcome '+userid);
   }
   else{
       response.send('Invalid Userid or Password');
   }
})
module.exports = userRoutes;