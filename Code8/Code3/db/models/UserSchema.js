const seq = require("sequelize");
const connection = require("../connection");
const User = connection.define('users',{
    'id':{type:seq.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
    'userid':{type:seq.STRING,allowNull:false,unique:true},
    'password':seq.STRING
});
module.exports = User;