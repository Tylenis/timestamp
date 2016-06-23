"use strict";

module.exports = function (app, datesettings) {
	app.route("/").get(function(req, res){
		res.sendFile(process.cwd()+"/public/index.html");
	});
	app.route("/:date").get(function(req, res){
		var unixtime = null;
    	var naturaltime = null;
    	var date;
    	if(isNaN(req.params.date) === false){
        	date = new Date(Number(req.params.date));
        	unixtime = +req.params.date;
        	naturaltime = date.toLocaleString("en-US", datesettings);
    	} else if(new Date(req.params.date)){
        	unixtime = Date.parse(req.params.date);
        	date = new Date(unixtime);
        	naturaltime = date.toLocaleString("en-US", datesettings);
    	}
    	var obj = {"unix": unixtime, "natural": naturaltime};
    	res.send(obj);
	});
};
