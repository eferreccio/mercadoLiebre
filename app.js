const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath)) 

app.listen(process.env.PORT || 3000, function(){
    console.log("corriendo el server 3000");
});
app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'views/home.html'));
});
app.get('/register', function(req,res){
    res.sendFile(path.resolve(__dirname,'views/register.html'));
});
app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname,'views/login.html'));
});
