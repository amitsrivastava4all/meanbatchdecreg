const mongoose = require('../connection');
const Schema = mongoose.Schema;
const RoleRightSchema = new Schema({
    'role':{type:String,required:true, unique:true},
    'rights':{type:Array}
})
const RoleRightModel = mongoose.model('rolerights',RoleRightSchema);
module.exports = RoleRightModel;