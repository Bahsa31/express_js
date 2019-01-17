var express = require("express");
var app = express();
app.post('/user',function(req,res){
    res.json({'code':'user created'});
});
app.listen(3000,function(){
    console.log('Server Successfully Started')
});
