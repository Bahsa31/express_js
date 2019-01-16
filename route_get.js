var express = require("express");
var app = express();
app.get('/user',function(req,res){
    res.json({'name':'Khadar Basha Shaik'})
});
app.listen(3000,function(){
    console.log('Server Successfully Started')
});
