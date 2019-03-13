const productRoutes = require("express").Router();
const Product = require("../models/product");
const logger= require("../utils/logger");
const productOperations = require("../db/helpers/productoperations");
productRoutes.post('/addproduct',(req,res)=>{
    
var id = req.body.id;
var name = req.body.name;
var price = req.body.price;
var url = req.body.url;
var desc = req.body.desc;
const product = new Product(id, name, price, url,desc);
productOperations.add(product,res);
})
productRoutes.get('/showproduct/:id/:apiKey?',(req,res)=>{
    if(req.params.apiKey=='1ABZQ23'){
        productOperations.findById(req.params.id,res);
    }
    else{
        res.status(404).json({error:'Invalid API Key'})
    }
})
productRoutes.get('/fetchproducts/:skip?',(req,res)=>{
    console.log("Skip Value is ",req.params.skip);
    logger.debug('Inside Product API Fetch');
    productOperations.find(req.params.skip, res);
})
productRoutes.put('/updateproduct',(req,res)=>{
    
})
productRoutes.get('/fetchproduct/:id',(req,res)=>{
    
})
productRoutes.delete('/removeproduct',(req,res)=>{
    
})
productRoutes.patch('/updateprice',(req,res)=>{
    
})
module.exports = productRoutes;