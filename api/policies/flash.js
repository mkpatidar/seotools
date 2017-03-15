module.exports=function(req,res,next){
	if(req.session.current_user){
	  res.locals.current_user=_.clone(req.session.current_user);
	}else{
	  res.locals.current_user=false;
	}	
	// Session for support user---start
	if(req.session.support_user){
	  res.locals.support_user=_.clone(req.session.support_user);
	}else{
	  res.locals.support_user=false;
	}
	// Session for support user---End
	res.locals.flash={};
	if(!req.session.flash) return next();
	res.locals.flash=_.clone(req.session.flash);
	req.session.flash={};
	next();
}