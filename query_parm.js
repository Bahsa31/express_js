var express = require("express");
var app = express();
app.get('/user',function(req,res){
    var queryparam=req.query;
    console.log(queryparam.age);
    res.json(queryparam);
});
app.listen(3000,function(){
    console.log('Server Successfully Started')
});
