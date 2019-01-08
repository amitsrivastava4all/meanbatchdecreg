window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#compute").addEventListener("click",doCompute);
}
function doCompute(){
    var bs = document.querySelector("#basicsalary").value;
    salaryOperations.takeSalary(bs);
    print(); 
    /*var hra = salaryOperations.hra();  
    var da = salaryOperations.da();  
    var ta = salaryOperations.ta();  */
   // document.querySelector("#hra").innerText = hra;
}

function createTag(key,val){
    var div = document.querySelector("#result");
var p = document.createElement("p");
if(key=='hra'){
    let myStyle = val>60000?'green':'red';
    p.className=myStyle;
}
p.innerText = key +" "+val;
div.appendChild(p);
}

function print(){
    document.querySelector("#result").innerHTML = "";
    for(let key in salaryOperations){
        if(key==="basicSalary" || key=="takeSalary"){
            continue;
        }
        if(typeof (salaryOperations[key])==="function"){
            var val = salaryOperations[key]();
            createTag(key, val)
            //console.log("Calling ",salaryOperations[key]());
        }
        //console.log("Key is ",key);
    }
}