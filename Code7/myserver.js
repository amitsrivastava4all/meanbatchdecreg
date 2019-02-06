const http = require("http");
function isStaticFiles(filename){
    const path = require("path");

    var extensions = [".html",".css",".js",".png",".jpg"];
    var ext = path.extname(filename);
   return  extensions.indexOf(ext)>=0;
}
function handleRequestResponse(request, response){
    var method = request.method;
    var url = request.url;
     response.writeHead(200,"{'content-type':'text/html'}");
    console.log("Req ",request.method," URI ",request.url);
    if(isStaticFiles(url)){
        const path = require("path");
        const fullPath = path.join(__dirname,"public"+url);
        console.log(__dirname+" NOW Start Reading Full Path is "+fullPath);
        const fs = require("fs");
        const stream = fs.createReadStream(fullPath);
        console.log("Going to Pipe as a Response"+fullPath);
        stream.pipe(response);
    }
    else
    if(method=='GET' && url =='/welcome'){
        response.write('Welcome User ');
        response.end();
    }
    // else
    // if(method=='GET' && url =='/index.html'){
        
    //     const path = require("path");
    //     const fullPath = path.join(__dirname,"public"+url);
    //     console.log(__dirname+" Full Path is "+fullPath);
    //     const fs = require("fs");
    //     const stream = fs.createReadStream(fullPath);
    //     stream.pipe(response);
    //    /* stream.on('data',(chunk)=>{
    //         response.write(chunk);
    //     })
    //     stream.on('end',()=>{
    //         response.end();
    //     })*/
    // }
    else{
    response.write("<h1><a href='index.html'>Login</a>Hello Client I am Server...</h1>");
    response.end();
    }

}
console.log("Process is ",process.env);
var server = http.createServer(handleRequestResponse);
server.listen(process.env.PORT || 1234,()=>{
    console.log("Server Start");
})