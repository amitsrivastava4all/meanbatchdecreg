const User = require("../models/UserSchema");
const userOperations = {
    add(userObject){
       return User.create(userObject);
        // var pr = User.create(userObject);
        //return pr;
    },
    search(){

    },
    update(){

    },
    remove(){

    },
    sort(){

    }
}
module.exports = userOperations;