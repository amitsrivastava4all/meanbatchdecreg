const mongoose = require("../connection");
const ProductSchema = mongoose.Schema;
const product = new ProductSchema({
    id:{type:Number, required:true},
    name:{type:String,required:true,lowercase:true},
    price:{type:Number,default:0},
    url:{type:String}
    //feedback:[]
});
const Product = mongoose.model("products",product);
module.exports = Product;
