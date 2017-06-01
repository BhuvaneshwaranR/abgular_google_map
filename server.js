var express=require('express');
var app=express();
var port=process.env.port || 3000;
app.use(express.static(__dirname +'/public'));
// app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.listen(port,function()
{
  console.log("app running on port "+port);
});