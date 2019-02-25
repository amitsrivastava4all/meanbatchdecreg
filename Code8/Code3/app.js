const express = require("express");
const session = require("express-session");
const app =  express();
const bodyParser = require("body-parser");
const loadTables= require("./utils/loadmodels");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
//app.set('views','./templates')
app.use(session({
    secret: 'Its My Life',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false , maxAge:10*60*1000
  }
  }))
  app.use('/',require("./routes/login"));
  app.use(require("./utils/nocache"));
  app.use(require("./utils/sessioncheck"));
app.use('/',require("./routes/user"));
app.use('/products',require("./routes/product"));
app.use((request, response,next)=>{
    response.send('U Type Something Wrong...');
})
loadTables(app);

