const request = require('request');
var express = require('express');
var app = express();
//let apiKey = '19bb9ff9d351e160bcb94bd5094f775f';
let apiKey = process.env.APPSETTING_ApiKey || '0000000000';

app.get('/by-zip/:zip', function (req, res) {
    let zip = req.params.zip;
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`

    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            res.end(body);
        }
    });
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
}); 