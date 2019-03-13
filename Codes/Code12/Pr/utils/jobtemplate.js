function job(name){
    var str = `<p>Congrats U have a Job ${name}</p>`
    return str;
}
module.exports = job;
console.log('Job is ',job("Amit"));