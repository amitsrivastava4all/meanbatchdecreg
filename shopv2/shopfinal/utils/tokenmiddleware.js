const tokenOpr = require('./token');
function checkToken (request, response,next){
    var token = request.header['authorization'];
    if(token){
            tokenOpr.verifyToken(token);
            response.setHeader('success','')
    }
    else{
        response.setHeader('failure','');
    }
    next();
}
module.exports = checkToken;