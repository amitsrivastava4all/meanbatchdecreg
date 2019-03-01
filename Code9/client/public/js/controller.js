window.addEventListener("load",init);
function init(){

    loadProducts();
    bindEvents();
}

function printProduct(product){
    console.log('Product is ',product);
    document.querySelector("#products").innerHTML=`<img src='${product.url}'> Desc is ${product.desc} Name is ${product.name}`;
}

function showProduct(url){
    console.log("Show Product Call ",url);
    document.querySelector("#products").innerHTML='';

    fetch('http://localhost:1234/'+url).then(res=>{
        res.json().then(data=>{
            console.log("Data is ::::  ",data.doc);
            printProduct(data.doc);
        }).catch(err=>{
            console.log("error in json ",err);
        }).catch(e=>{
            console.log("Server Call fail ",e)
        })
    })
}

function printProducts(products){
    var productStr = '';
    var prod = document.querySelector("#products");
    prod.innerHTML = '';
    products.forEach(product=>{
        productStr+=`<p> <a onclick=showProduct('showproduct/${product.id}') href='#'>${product.name}</a>Id ${product.id} NAme ${product.name} Price ${product.price}</p>`
    });
    prod.innerHTML = productStr;
}
function loadProducts(){
    fetch(urls.producturl).then(response=>{
        response.json().then(data=>{
            printProducts(data.records);
            console.log("****** Data is ",data.records);
        }).catch(err=>{
            console.log("INvalid JSON ",err);
        }).catch(e=>{
            console.log("Unable to Contact Server ",e);
        })
    })
}
function bindEvents(){

}