const seq = require("../db/connection");
const User = require("../db/models/UserSchema");
function loadTables(app){
    seq.sync({force:false}).then(()=>{
    console.log("Table Created...");
    app.listen(process.env.PORT || 1234,(err)=>{
        if(err){
            throw err;
        }
        else{
            console.log("Server Started At 1234");
        }
    })
}).catch(err=>{
    console.log("Error During Table Creation");
});
}
module.exports = loadTables;