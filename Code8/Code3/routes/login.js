const express = require("express");
const loginRoutes = express.Router();
const User = require("../models/user");
const userOperations = require("../db/helpers/useroperations");

loginRoutes.post('/login',(req,response)=>{
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
             req.session.userid = userid;
             console.log("Session ID :::: ",req.session.userid);
             response.redirect('/mobiles');
             //response.render('dashboard',{userid:req.session.userid,menus:loadMenus()});
             //response.send('Welcome '+userid);
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
 module.exports = loginRoutes;