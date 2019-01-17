var express = require("express");
var app = express();

app.use(function(req,res,next){
    console.log('IP Address :',req.ip);
    next();
});

app.get('/user/user/:userName/age/:userAge',function(req,res){
    var resourceparam=req.params;
    console.log(resourceparam.userName);
    console.log(resourceparam.userAge);
    res.json(resourceparam);
});

app.post('/user',function(req,res){
    res.json({'code':'user created'});
});

app.listen(3000,function(){
    console.log('Server Successfully Started')
});
