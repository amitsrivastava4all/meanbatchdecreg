const productRoutes = require("express").Router();
productRoutes.get('/search/:product/:category/:price',(request,response)=>{
console.log("PARAM IS ",request.params.product);
response.send('Product Search Called..'+request.params.product+ " "+request.params.category+" "+request.params.price);
}) 

productRoutes.post('/add',(request,response)=>{
    
}) 
productRoutes.get('/delete',(request,response)=>{
    
}) 
productRoutes.get('/update',(request,response)=>{
    
}) 
module.exports = productRoutes;