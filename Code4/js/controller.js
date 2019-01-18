window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        questionObject[key] = document.querySelector("#"+key).value;
    }
    questionOperations.add(questionObject);
}