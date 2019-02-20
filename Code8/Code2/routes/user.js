const express = require("express");
const userRoutes = express.Router();
const User = require("../models/user");
const userOperations = require("../db/helpers/useroperations");
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

userRoutes.post('/register',(req,response)=>{
    console.log("Body is ",req.body); 
    var userid  = req.body.userid;
    var pwd = req.body.pwd;
    var userObject = new User(userid, pwd);
    var promise = userOperations.add(userObject);
    promise.then(()=>{
        response.send('Register SuccessFully');
    }).catch(err=>{
        response.send('Error During Register')
        console.log("Error During Register ",err);
    })
    
 })

userRoutes.post('/login',(req,response)=>{
   console.log("Body is ",req.body); 
   var userid  = req.body.userid;
   var pwd = req.body.pwd;
   var userObject = new User(userid, pwd);
   var pr = userOperations.search(userObject);
   pr.then(result=>{
      
       if(result){
        var hashPassword = result.dataValues.password;
        console.log("Pwd ",result.dataValues.password);
        console.log("Result is ",result);
        const encrypt = require("../utils/encrypt");
        let isMatched = encrypt.compareHash(pwd,hashPassword);
        if(isMatched){
        response.send('Welcome '+userid);
        }
        else{
            response.send('Invalid Userid or Password ');
        }
    }
       else{
        console.log("NOT MATCH Result is ",result);
        response.send('Invalid Userid or Password');
       }
    
   }).catch(err=>{
       console.log("Error is ",err);
       response.send('Error in DB During Login');
   })
})
module.exports = userRoutes;