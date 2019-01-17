var express = require("express");
var app = express();
app.get('/user/user/:userName/age/:userAge',function(req,res){
    var resourceparam=req.params;
    console.log(resourceparam.userName);
    console.log(resourceparam.userAge);
    res.json(resourceparam);
});
app.listen(3000,function(){
    console.log('Server Successfully Started')
});
