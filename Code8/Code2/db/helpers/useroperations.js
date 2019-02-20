const User = require("../models/UserSchema");
const encrypt = require("../../utils/encrypt");
const userOperations = {
    add(userObject){
        var hashPassword = encrypt.generateHash(userObject.password);
       userObject.password = hashPassword;
        return User.create(userObject);
        // var pr = User.create(userObject);
        //return pr;
    },
    search(userObject){
        //User.find({where:{userid:userObject.userid,password:userObject.password}})
         return  User.find({where:{userid:userObject.userid}});
        
    },
    update(){

    },
    remove(){

    },
    sort(){

    }
}
module.exports = userOperations;