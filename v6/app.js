const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./api/user/userapi'));
app.use('/',require('./api/dashboardapi'));
app.use(require('./utils/tokenmiddleware'));

// Dashboard, Order, Customer, Carts
app.listen(process.env.PORT|| 1234,()=>{
    console.log('Server Start');
    const userOperation = require('./db/helpers/userOperations');
    const config = require('./utils/config');
    userOperation.findAdmin({userid:config.ADMIN});
})