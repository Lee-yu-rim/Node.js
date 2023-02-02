var ejs = require('ejs');
var http = require('http');
var fs = require('fs');

var http = require("http");

http.createServer(function(request, response){
    fs.readFile('ejspage2.ejs', 'utf-8', function(error, data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data,{
            name:'Hong hello',
            description:'seoul'
        }));
    });
}).listen(52273, function(){
    console.log('Server running at http://127.0.0.1:52273/');
});