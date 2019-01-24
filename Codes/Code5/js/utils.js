function* autoIncNumber(){
    var num = 0;
    while(true){
    num++;
    yield num;
    }
    }