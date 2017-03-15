module.exports = {
  do_get:function(url, next){
    var http=require("http");
    var querystring = require('querystring');
    var _api_url="http://"+sails.config.constants.DATASERVER+":54321"
    console.log("-------------\n\nFetching details from url ", _api_url)

    var body="";

    // var h_req = http.request(options, function(h_res) {
    var h_req = http.get(_api_url+url, function(h_res) {
        // console.log('STATUS: ' + h_res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(h_res.headers));
        h_res.setEncoding('utf8');
        // var received;

        h_res.on('data', function (chunk) {
          // console.log('BODY: ' + chunk);  
          body += chunk; 
        });

        h_res.on('end', function() {
          // console.log("Final body is ---------------",body);
            if(body){
              try{
                var response = JSON.parse(body);
                next(null, response)
            }catch(e){
                var response = body;
                next(e, response)
            }
            }
        });
    });

    

    h_req.on('error', function(e) {
      // console.log("E element is",e)
      // next(e, "There was some error in getting data")
    });

    // write data to request body
    h_req.write('data\n');
    h_req.end(); 
  },
  do_post:function(url, data, next){
    var http = require('http');
    http.post = require('http-post');
    var url = 'http://'+sails.config.myconf.DATASERVER+':6169'+url;
    http.post(url, data, function(res){
      res.setEncoding('utf8');
      var body="";
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function() {
        if(body){
          try{
            var response = JSON.parse(body);
            next(null, response)
          }catch(e){
            var response = body;
            next(e, response)
          }
        }
      });
    });
  },
  api_connect_database:function(req,res){
    var database_config = req.params.all();
    delete database_config.node_name;
    delete database_config.id;
    var data = {
      'connect':JSON.stringify(database_config)
    }
    HttpService.do_post("/rest/api/",data,function(err,resp){
      if(err){
        res.json({status:500, msg:"There is some problem to connect with database", data:err})
        return;
      }
      res.send(resp);
    })
  },
}