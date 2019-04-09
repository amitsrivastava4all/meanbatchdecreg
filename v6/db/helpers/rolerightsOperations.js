const RoleRightModel = require('../models/roleschema');
const roleRightOperations = {
    addRoleRight(name, rights){
        RoleRightModel.create({'role':name,rights:rights},(err)=>{
            if(err){
                console.log('Unable to Create Role and Right')
            }
            else{
                console.log('Role and Right Created...');
            }
        })
    },
    getRoleRights(roleName,response){
         RoleRightModel.findOne({'role':roleName},(err,doc)=>{
             if(err){
                 response.status(500).json({message:'Error During Role Fetch'});
             }
             else
             if(doc){
                 response.status(200).json({role:doc});
             }
             else{
                 response.status(404).json({message:'No Role Found'});
             }
         })   
    }
}
module.exports = roleRightOperations;