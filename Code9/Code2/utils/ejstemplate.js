function template(name, job){
const ejs = require("ejs");
ejs.renderFile('../views/jobtemplate.ejs', {name:name,job:job}, function(err, str){
    if(err){
        console.log('Error is ',err);
    }
    else{
        console.log('Data is ',str);
    }
    // str => Rendered HTML string
});

//return html;
}
template('Ram','SE');