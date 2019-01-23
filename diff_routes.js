var express = require('express');
var app = express();

app.set('secratkey','7406107767');

var secratkey=app.get('secratkey');

console.log(secratkey);

app.use(function(req,res,next){
    console.log('IP Address :',req.ip);
    next();
});

app.get('/user',function(req,res){
    var queryparam=req.query;
    console.log(queryparam.age);
    res.json(queryparam);
});

app.get('/user/user/:userName/age/:userAge',function(req,res){
    var resourceparam=req.params;
    console.log(resourceparam.userName);
    console.log(resourceparam.userAge);
    res.json(resourceparam);
});

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/hello', function(req, res){
    res.send("Hello World!");
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
});

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
});


app.listen(3000,function(){
    console.log('Server Successfully Started')
});

