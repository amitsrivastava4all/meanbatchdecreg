const ProductSchema = require("../models/productschema");
const logger = require("../../utils/logger");
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
sum(){
    ProductSchema.aggregate(
       [ { $group: {
            _id:null,
           
            total: { $sum: "$price" }
        }}],
    (err,docs)=>{
        if(err){
            console.log("Error is ",err);
        }
        else{
            console.log("Docs are ",docs);
        }
    }
        );
},

find(res){
    logger.debug('Call Product Operation Find');
ProductSchema.find({},"id name price",(err,docs)=>{
   // err = true;
    if(err){
        logger.error("Some Error During Find in ProductOperations");
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
findById(id,res){
    ProductSchema.findOne({"id":id},(err,doc)=>{
        if(err){
            res.status(500).json({'message':'Some DB Issue During Find BY Id'});
            console.log("Find By Id Error ",err);
        }
        else
        if(doc){
            console.log("Find by id ",doc);
            res.status(200).json({doc:doc});
        }
        else{
            console.log('Not Found .....');
            res.status(404).json({'message':'No Record Found'});
        }
    })
}
}
productOperations.sum();
module.exports = productOperations;