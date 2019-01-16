var express = require("express");
var app = express();
app.get('/user',function(req,res){
    var obj={
        'ip':req.ip,
        'method':req.method,
        'headers':req.headers
    }
    res.json(obj)
});
app.listen(3000,function(){
    console.log('Server Successfully Started')
});
