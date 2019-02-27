const ProductSchema = require("../models/productschema");
const productOperations = {
    add2(id , name , price, url){
        var product = new ProductSchema({id:id, name:name , price: price, url:url});
        //product.save().then().catch();
    },

add(productObject,res){
ProductSchema.create(productObject,(err)=>{
    if(err){
        res.status(500).json({message:'Error During Add'})
    }
    else{
        res.status(200).json({message:'Product Added in DB'})
    }
})

},
bulkAdd(){

},
remove(){

},
update(){

},
find(res){
ProductSchema.find({},(err,docs)=>{
    if(err){
        res.status(500).json({"message":'Error During Find '})
    }
    else{
        if(docs && docs.length>0){
            res.status(200).json({"message":'Record Found ',records:docs});
        }
        else{
            res.status(404).json({"message":'No Record Found '}) 
        }
    }
})
},
findById(){

}
}
module.exports = productOperations;