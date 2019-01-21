const questionOperations = {
questions:[],
add(questionObject){
this.questions.push(questionObject);
},
delete()
{
    
},
mark(id){
    var questionObject = this.questions.find(question=>question.id==id);
    questionObject.toggle();
},
countMark(){
    return this.questions.filter(question=>question.isMarked).length;
},
countUnMark(){
    return this.questions.length - this.countMark();
}
}
