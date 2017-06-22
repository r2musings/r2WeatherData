const request = require('request');
var express = require('express');
var app = express();
let apiKey = '19bb9ff9d351e160bcb94bd5094f775f';
let zip = '30082';
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`

app.get('/:zip', function (req, res) {
    zip = zip || req.params.zip;
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            // console.log('body:', body);
            res.end(body);
            //let weather = JSON.parse(body)
            //console.log(`It is ${weather.main.temp} in ${weather.name}.`);
        }
    });
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
    // console.log(process.env);
    //  var host = process.server;
    // console.log("listening on http://%s:%s", host, port)
    console.log("listening on http://localhost:%s", port);
});

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

server.listen(port);

console.log("Server running at http://localhost:%d", port);