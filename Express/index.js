var express = require("express"),
	app = express();

app.get("/", function (req, res) {
	res.json("Hello World!");
});

app.listen(3000, function(){
	console.log("Listening on port 3000!");
});