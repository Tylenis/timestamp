'use strict';

var express =require("express");
var routes = require("./app/routes/index.js");
var datesettings = {year: "numeric", month: "long", day: "numeric"};

var app = express();

app.use("/public", express.static(process.cwd() + "/public"));

routes(app, datesettings);

app.listen(process.env["PORT"]);
console.log("server is running on "+process.env["PORT"]);