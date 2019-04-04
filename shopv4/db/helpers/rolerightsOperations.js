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
    }
}
module.exports = roleRightOperations;