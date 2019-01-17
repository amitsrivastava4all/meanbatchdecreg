window.addEventListener("load",bindEvents);
function bindEvents(){
    var buttons = document.querySelectorAll(".num");
    buttons.forEach(button=>{
        button.addEventListener("click",takeValue);
        // if(button.innerText!='=' && button.innerText!='C'){
        // button.addEventListener("click",takeValue);
        // }
    })
    var oprButtons = document.querySelectorAll(".opr");
    oprButtons.forEach(button=>{
        button.addEventListener("click",operator);
    })
    document.querySelector("#equal").addEventListener("click",equal);
    document.querySelector("#clear").addEventListener("click",()=>{
        document.querySelector("#exp").value="";
        document.querySelector("#exp").focus();
    });
}
var oprFlag=true;
var isZero = false;
function operator(){
    if(oprFlag==false){
    document.querySelector("#exp").value+=this.innerText;
    oprFlag = true;
    isZero = true;
    }
}
function takeValue(){
    var currentValue = '';
    console.log("Flag is ",oprFlag);
    var val = document.querySelector("#exp").value;
    if(val=='0'){
        document.querySelector("#exp").value=this.innerText;
    }
    else
    if(oprFlag){
        oprFlag = false;
        if(this.innerText=='0'){
          currentValue = '';
        }
        else{
            currentValue = this.innerText ;
        }
        document.querySelector("#exp").value+=currentValue;
    
    }
    else{
        document.querySelector("#exp").value+=this.innerText;
    }
}

function equal(){
    document.querySelector("#exp").value=  eval( document.querySelector("#exp").value);
}