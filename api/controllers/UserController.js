/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login:function(req,res){
    if(req.session.current_user){
      res.redirect('/dashboard/');
    }else{
      res.view({
        layout:null
      });
    }
  },
  signup:function(req,res){
    if(req.session.current_user){
      res.redirect('/dashboard/');
    }else{
      res.view({
        layout:null
      });
    }
  },
  do_signup:function(req,res){  // CREATE ACCOUNT OF USER
    var new_users = req.params.all();
    if(!new_users.firstName || !new_users.lastName || !new_users.email || !new_users.password || !new_users.confirmPassword){   // FILL ALL INPUT FIELDS
      req.flash("error","Please fill all information.")
      res.redirect("/user/signup");
      return;
    }
    if(new_users.password != new_users.confirmPassword){  // PASSWORD AND CONFIRM PASSWORD DOES NOT MATCH
      req.flash("error","Password & confirm password does not match.")
      res.redirect("/user/signup");
      return;
    }
    if(new_users.email){ // CHECK EMAIL IS ALREADY EXISTS OR NOT
      User.findOne({email:new_users.email}).exec(function(email_err,user_data){
        if(email_err){ // GETTING ERROR IN FIND USER BY EMAIL
          req.flash("error","There is some error in email address")
          res.redirect("/user/signup");
          return;
        }else{
          if(user_data){ // GETTING USER'S DATA 
            req.flash("error","This email address is already exist, Please try again!");
            res.redirect("/user/signup");
            return;
          }else{
            var password = new_users.password;
            var crypto = require('crypto');
            var incrypt_password = crypto.createHash('md5').update(password).digest('hex');
            new_users.password = incrypt_password;
            new_users.status = "active";
            new_users.role = "user";
            delete new_users.confirmPassword;
            User.create(new_users).exec(function(err,response){ // CREATE USER'S ACCOUNT 
              if(err){
                req.flash("error","There is some error to create your account");
                console.log("There is some error to create your account!",err);
                res.redirect('/user/sognup');
              }else{
                console.log("Sign up successfully.",response);
                req.flash("error","Create your account successfully.");
                res.redirect('/user/login');
              }
            });
          }
        }
      })
    }else{
      req.flash("error","Please try again!")
      res.redirect("/user/signup");
      return;
    }
  },

  do_login:function(req,res,next){
    var password = req.param('password');
    var crypto = require('crypto');
    var incrypt_password = crypto.createHash('md5').update(password).digest('hex');
    var find_obj = {
      email:req.param('email'),
      password:incrypt_password,
    }
    User.findOne(find_obj).exec(function(err,user_data){
      if(err){
        console.log(err);
        req.flash("error","There was some problem with finding this user.")
        req.session.current_user = null;
        req.session.authenticated = false;
        res.redirect("user/login");
        return;
      }
      if(!user_data){
        console.log("Invalid User",user_data);
        req.flash("error","Invalid email or password")
        req.session.current_user=null;
        req.session.authenticated=false;
        res.redirect("user/login");
        return false;
      }else{
        req.session.authenticated=true;
        req.session.current_user=user_data;
        res.redirect("/dashboard/");
      }
    });
  },
  logout:function(req,res){
    req.session.current_user = null;
    req.flash("error","Successfully logged out");
    req.session.authenticated=false;
    res.redirect("/user/login");
    return false; 
  },
}

