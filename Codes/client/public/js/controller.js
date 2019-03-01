window.addEventListener("load",init);
function init(){

    loadProducts();
    bindEvents();
}
function printProducts(products){
    var productStr = '';
    var prod = document.querySelector("#products");
    prod.innerHTML = '';
    products.forEach(product=>{
        productStr+=`<p>Id ${product.id} NAme ${product.name} Price ${product.price}</p>`
    });
    prod.innerHTML = productStr;
}
function loadProducts(){
    fetch(urls.producturl).then(response=>{
        response.json().then(data=>{
            printProducts(data.records);
            console.log("Data is ",data.records);
        }).catch(err=>{
            console.log("INvalid JSON ",err);
        }).catch(e=>{
            console.log("Unable to Contact Server ",e);
        })
    })
}
function bindEvents(){

}