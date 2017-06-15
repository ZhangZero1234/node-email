var nodemailer = require("nodemailer");
var config = require("./config.js");
var express = require("express");
var app = express();
app.get("/",function(req,res){
	var transporter = nodemailer.createTransport({
	'host': 'smtp.163.com',
    'port': 465,
	auth:{
		user:config.user,
		pass:config.pass
	}
});

transporter.sendMail({
	from:config.user,
	to:"",
	subject:"测试一下",
	html:"hahahahahahah"
},function(err,response){
	if(err)
	{
		console.log(err);
	}
	else{
		console.log('send success'+response);
	}
});
}).listen(3000);