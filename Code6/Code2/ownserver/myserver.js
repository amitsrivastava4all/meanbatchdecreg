const http = require("http");
function handleRequestResponse(request, response){
    response.write('<h1>Hello Client I am Server...</h1>');
    response.end();

}
var server = http.createServer(handleRequestResponse);
server.listen(1234,()=>{
    console.log("Server Start");
})