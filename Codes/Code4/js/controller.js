window.addEventListener("load",init);
window.addEventListener("online",()=>{
    alert("U r online");
})
window.addEventListener("offline",()=>{
    alert("U r offline");
})
var counter;
function init(){
    updateCount();
    bindEvents();
    counter = autoIncNumber();
    loadAutoIncNumber();
    document.querySelector("#searchbox").className = 'hide';
}
const loadAutoIncNumber=()=>document.querySelector("#id").innerText = counter.next().value;


function save(){
    if(localStorage){
        var json = JSON.stringify(questionOperations.questions);
        localStorage.ques = json;
        alert("Record Saved....");
    }
    else{
        alert("Ur Browser is Outdated can't support local storage");
    }
}

function load(){
    if(localStorage){
        if(localStorage.ques){
            questionOperations.questions = [...questionOperations.questions, ...JSON.parse(localStorage.ques)];
            printQuestions(questionOperations.questions);
        }
        else{
            alert("No Data to Load...");
        }
    }
    else{
        alert("Ur Browser is Outdated can't support local storage");  
    }
}

function bindEvents(){
    document.querySelector("#save").addEventListener("click",save);
    document.querySelector("#load").addEventListener("click",load);

    document.querySelector("#searchbt").addEventListener("click",showSearchBox);
    document.querySelector("#add").addEventListener("click",addQuestion);
}
function showSearchBox(){
    document.querySelector("#searchbox").className='show';
}
function clearAll(){
    document.querySelectorAll(".clear").forEach(f=>f.value='');
    document.querySelector("#name").focus();
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        if(key=='isMarked'){
            continue;
        }
        if(key=='id'){
            questionObject[key] = document.querySelector("#"+key).innerText; 
            continue;
        }
        questionObject[key] = document.querySelector("#"+key).value;
    }
    questionOperations.add(questionObject);
    printQuestion(questionObject);
    updateCount();
    loadAutoIncNumber();
    clearAll();
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
function printQuestions(questionList){
    var tbody = document.querySelector("#questionlist").innerHTML='';
    questionList.forEach(printQuestion);
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