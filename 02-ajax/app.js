var express = require('express');
var app = express()

var buddies = [
	{name:"Bob Morane"},
	{name:"Doctor No"},
	{name:"Fox Mulder"},
	{name:"Lady Penelope"}
];

app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());

/*
 $.get("/buddies", function(data) { console.log(data); })
*/
app.get("/buddies", function(req, res){
	res.send(JSON.stringify(buddies))
});

app.post("/buddies", function(req, res){
	var buddy = req.body
	console.log(buddy)
	buddies.push(buddy)
	res.send(JSON.stringify(buddy))
});

/*
$.ajax({
	type: "POST",
	url: "/buddies/",
	data: JSON.stringify({"name":"toto"}),
	success: function(data){ console.log("success", data); },
	error: function(err){ console.log("error", err); },
	dataType: "json", contentType: 'application/json'
});
*/

console.log("listening on 3000")

app.listen(3000)