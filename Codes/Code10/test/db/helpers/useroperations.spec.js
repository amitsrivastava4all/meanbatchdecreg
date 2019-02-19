const userOperation = require("../../../db/helpers/useroperations");
var pr = userOperation.add({userid:'amit',password:'123'});
pr.then(result=>{
    console.log("Record Added in DB");
}).catch(err=>{
    console.log("Not Able to add in DB ",err);
})