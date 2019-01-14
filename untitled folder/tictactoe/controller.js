window.addEventListener("load",bindEvents);
var buttons ;
function bindEvents(){
   buttons =   document.querySelectorAll("button");
   buttons.forEach(button=>button.addEventListener("click",printXorZero));
}
const isNotBlank = (str)=>str.trim().length>0;

function isRowNotBlank(first, second, third){
    return isNotBlank(first) && isNotBlank(second) && isNotBlank(third);
}

function isSameRow(first,second, third){
    if(isRowNotBlank(first, second, third)){
        if(first==second && first ==third){
            return true;
        }
    }
    return false;
}

function checkCount(){
    var counter = 0;
    for(let button of buttons){
        if(button.innerText.trim().length>0){
            counter++;
        }
    }
    return counter;
}   
function gameOver(){
    if(checkCount()>=5){
        if(isSameRow(buttons[0].innerText , buttons[1].innerText , buttons[2].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[0].innerText , buttons[3].innerText , buttons[6].innerText)){
            return true;
        }
    }
    return false;
}

var isXorZero  = false;

function printXorZero(){
    var str = "";
    if(this.innerText.trim().length==0){
        str = isXorZero?"X":"0";
   this.innerText = str;  
   isXorZero = !isXorZero;
   document.querySelector("#result").innerText = gameOver()?"Game Over Win By "+str:"";     
}

    //console.log("Print x or zero ",this);
}