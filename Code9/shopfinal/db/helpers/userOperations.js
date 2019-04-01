const UserModel = require('../models/userschema');
const config = require('../../utils/config');
const userOperations = {
    add(userObject,response){
        UserModel.create(userObject,(err)=>{
               if(err){
                response.status(500).json({status:config.status.ERROR,message:'Error in User Creation Contact to System Admin'});
               } 
               else{
                response.status(200).json({status:config.status.SUCCESS,message:'User Registered SuccessFully'}); 
               }
        })
    }
}
module.exports = userOperations;