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
function loadMenus(){
    var menus = [{
        name:'mobile',link:'mobiles'
    },{
        name:'led',link:'led.html'
    },{
        name:'tablets',link:'tablets.html'
    }];
    return menus;
}
userRoutes.get('/logout',(req,res)=>{
    if(req.session){
        req.session.destroy(()=>{
            console.log("Session Destroy....");
        });
        res.send('U Logout SuccessFully....');
    }
    else{
        res.redirect('/mobiles');
    }
})
userRoutes.get('/smart',(req,res)=>{
    res.send('U r on Smart Mobile Page '+req.session.userid+"<form action='logout'> <button>Logout</button></form>");
})
userRoutes.get('/mobiles',(req,response)=>{
    // if(req.session && req.session.userid){
        response.send("Mobiles are <a href='smart'>Smart</a> "+req.session.userid);
    // }
    // else{
    //     const path = require("path");
    //     var currentPath = path.normalize(__dirname+"/..");
    //     console.log("Current Path is ",currentPath);
    //     var fullPath = path.join(currentPath,"public/login.html");
    //     console.log("Full Path is ",fullPath);
    //     response.sendFile(fullPath);
    // }
})

module.exports = userRoutes;