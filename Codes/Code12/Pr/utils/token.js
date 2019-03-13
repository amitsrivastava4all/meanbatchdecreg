const token = require("jsonwebtoken");
function generateToken(userid){
    let mySecretKey='Thisisthesecret';
    
return token.sign({data:userid+Date.now(),expiresIn:'1h'},mySecretKey);
}
module.exports = generateToken;
// var t1 = generateToken("amit");
// var t2 = generateToken("amit");
// console.log('T is ',t1, "    ",t2);