var fs=require('fs');
var util=require('util');


exports.index = function(req, res){
	res.send("Index Page");
  // res.redirect('login');
};

/*
 * GET login page.
 */

exports.login = function(req, res) {
  res.render('login',{name:'Please Log in'});

};
exports.loginUser=function(req,res)
{
  req.assert('username','Username is Required').notEmpty();
  req.assert('password','Password is Required').notEmpty();
  var errors=req.validationErrors();
  if(errors)
  {
  	//Send the error message to the user and return to login page
  res.render('login', {name:'Invalid Login', errors:errors});

  }
  else
  {
  	console.log(req.body.username);
  	console.log(req.body.password);
  	if(req.body.username!='root' || req.body.password!='root')
  	{

  	  res.render('login',{name:'Invalid Login',error:{}});
  	}
  else
  	{
  		res.render('index');
  	}
  }
  
}
/*
 * GET register page.
 */

exports.register = function(req, res) {
  res.render('register');
};

exports.registerUser = function(req, res) {
res.render('index');
  
}
