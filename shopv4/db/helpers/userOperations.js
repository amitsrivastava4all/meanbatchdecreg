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
    },
    addAdmin(){
        const userObject = {userid:config.ADMIN, password:config.ADMINPWD,'role':'ADMIN',isFirstTime:'Y'};
        UserModel.create(userObject,(err)=>{
            if(err){
             console.log({status:config.status.ERROR,message:'Error in Admin Creation Contact to System Admin'});
                throw err;
            } 
            else{
             console.log({status:config.status.SUCCESS,message:'Admin Registered SuccessFully'}); 
               const roleRightOperations = require('./rolerightsOperations');
               roleRightOperations.addRoleRight('Admin',[{name:'Add User',url:'/adduser'},{name:'Add Product',url:'/addproduct'}]) 
            }
     })
    },
    findFirstTime(response){
        UserModel.findOne({userid:'admin'},(err,doc)=>{
            if(err){
                response.status(500).json({status:'E',message:'System Failure'});
                throw err;
            }
            if(doc ){
                if(doc.isFirstTime=='Y'){
                    response.status(200).json({status:'Y'});
                }
                else{
                    response.status(200).json({status:'N'});
                }
                
            }
            else{
                response.status(500).json({status:'F',message:'System Failure'});
            }
        })
    },
    findAdmin(userObject){
            UserModel.findOne(userObject,(err,doc)=>{
                if(err){
                    console.log('Find Error is ',err);
                    console.log({status:config.status.ERROR,message:'Error in Contact to DB '});
                   }   
                else{
                    if(!doc){
                        console.log('Going to Add A New Admin');
                            this.addAdmin();
                    }
                    else{
                        console.log('Admin Already There');
                    }
            }
    });
},
    find(userObject, response){

        UserModel.findOne(userObject,(err,doc)=>{
            if(err){
                console.log('Find Error is ',err);
                response.status(500).json({status:config.status.ERROR,message:'Error in User Find Contact to System Admin'});
               }   
            else{
                if(doc){
                    const jwt = require('../../utils/token');
                    const token = jwt.generateToken(doc.userid)
                    response.status(200).json({token:token,status:config.status.SUCCESS,message:'User Login SuccessFully'}); 
                }
                else{
                    response.status(200).json({status:config.status.FAIL,message:'Invalid Userid or Password'}); 
                }
            }  
        })
    }
}
module.exports = userOperations;