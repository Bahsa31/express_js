var express = require("express");
var app = express();
app.set('secratkey','7406107767');

var secratkey=app.get('secratkey');

console.log(secratkey);

