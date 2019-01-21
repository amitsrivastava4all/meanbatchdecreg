window.addEventListener("load",init);
function init(){
    updateCount();
    bindEvents();
}
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        if(key=='isMarked'){
            continue;
        }
        questionObject[key] = document.querySelector("#"+key).value;
    }
    questionOperations.add(questionObject);
    printQuestion(questionObject);
    updateCount();
}
function updateCount(){
    document.querySelector("#total").innerText = questionOperations.questions.length;
    document.querySelector("#mark").innerText = questionOperations.countMark();
    document.querySelector("#unmark").innerText = questionOperations.countUnMark();

}

function trash(){
    console.log("Trash Call ",this);
    var id = this.getAttribute("qid");
    questionOperations.mark(id);
    var tr = this.parentNode.parentNode;
    tr.classList.toggle("alert-danger");

    updateCount();
}

function edit(){
    console.log("Edit Call ",this);
}

function createIcon(className,fn,id){
    var icon = document.createElement("i");
    icon.className=className;
    icon.setAttribute("qid",id); // <i qid=1001></i>
    icon.addEventListener("click",fn);
    return icon;
}

function printQuestion(questionObject){
    var tbody = document.querySelector("#questionlist");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
        if(key=='isMarked'){
            continue;
        }
    tr.insertCell(index).innerText = questionObject[key];
    index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon('fas fa-trash-alt mr-2',trash,questionObject.id));
    td.appendChild(createIcon('fas fa-edit',edit,questionObject.id));
}