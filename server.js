const request = require('request');
var express = require('express');
var app = express();
let apiKey = process.env.APPSETTING_ApiKey || '0000000000';
var port = process.env.PORT || 1337;

app.get('/by-zip/:zip', function (req, resXX) {
    let zip = req.params.zip;
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`

    request(url, function (err, response, body) {
        if(err){
            res.error(error);
        } else {
            res.end(body);
        }
    });
});

app.listen(port, function () {
}); 