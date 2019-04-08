const dashBoardRoute = require('express').Router();
dashBoardRoute.get('/dashboard',(req,res)=>{
    const roleOperation = require('../db/helpers/rolerightsOperations');
    roleOperation.getRoleRights(req.query.role,res);
})
module.exports = dashBoardRoute;