var express = require("express");
var bodyParser=require("body-parser")
var app = express();

//attaching body parser middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/user/user/:userName/age/:userAge',function(req,res){
    var resourceparam=req.params;
    console.log(resourceparam.userName);
    console.log(resourceparam.userAge);
    res.json(resourceparam);
});

app.post('/user',function(req,res){
    console.log('body data',req.body);
    res.json({'code':'user created'});
});

app.listen(3000,function(){
    console.log('Server Successfully Started')
});
