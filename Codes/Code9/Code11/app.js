const express = require("express");
console.log("What is Express ",typeof express);
const app =  express();
const bodyParser = require("body-parser");
console.log("What is Express.static ",express.static("public"));


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
// userid=amit&pwd=123&city=Delhi,Mumbai   request.body {userid:amit, pwd:123}

app.get('/login',(req,response)=>{
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

app.post('/login',(req,response)=>{
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

app.use((request, response,next)=>{
    response.send('U Type Something Wrong...');
})
console.log("What is App ",typeof app);
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Server Started At 1234");
    }
})
