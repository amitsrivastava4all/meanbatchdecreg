const seq = require("sequelize");
const User = require("../db/models/UserSchema");
function loadTables(){
    User.sync().then(()=>{
    console.log("Table Created...");
}).catch(err=>{
    console.log("Error During Table Creation");
});
}
module.exports = loadTables;