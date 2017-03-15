/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req,res){
		res.view({
			angularCtrl:"Dashboard",
			title:"Dashboard",
			web_domain_url:""
		});
	},
	home:function(req,res){
		res.view({
			angularCtrl:"Dashboard",
			title:"Home",
			layout:null
		});
	},
	report:function(req,res){
		if(req.param("id")){ 
			var web_domain_url = req.param("id"); 
		}else{ 
			var web_domain_url = ""; 
		}
		res.view({
			angularCtrl:"Dashboard",
			title:"Report",
			web_domain_url:web_domain_url
		});
	},
	api_get_webpage_details:function(req,res){
		if(req.param('id')){
			var url = 'http://192.168.1.6:8080/seotool/webapi/url/'+req.param('id');
			var request = require('request');
			request(url, function(err, response, body){
				if(err){
					res.json({ status:500, msg:"There is some error to get web details!", data:null });
					return;
				}else{
		    	res.json({ status:200, msg:"Get web details successfully.", data:response.body });
		    	return;
				}
			})
		}else{
			res.json({ status:500, msg:"There is some error to get web details!", data:null });
			return;
		}
	},
	

	/*get_file_size:function(req,res){
		var fs = require("fs"); //Load the filesystem module
		var stats = fs.statSync("assets/js/angular.min.js");
		var fileSizeInBytes = stats.size;
		var fileSizeInMegabytes = fileSizeInBytes;
		console.log("FileSize: ====== ",fileSizeInMegabytes);
	}*/

	/*api:function(req,res){
		var SEMRushAPI = require('sails-semrush');
		var URL = "www.seoexplode.com";
		var params = {
			database: 'us',
			type:'backlinks_refdomains',
			target_type:"root_domain",
			display_limit:10
		};
		var semrush = new SEMRushAPI('0f811d8d87a72437cf659404c5f7e53f');
		
		semrush.domain_organic(URL, params, function(err, response) {
			if(err){
				console.log("There is some error to fetching web traffic on API !")
				console.log("err: ",err)
				console.log("There is some error to fetching web traffic on API !")
			}else{
				console.log("**************** Get the web traffic successfully ***************");
				console.log(" Response: ",response);
				console.log("**************** Get the web traffic successfully ***************");
			}
		});
	}*/

};

