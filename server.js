const unirest = require("unirest");
const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res) => {
	//console.log('This is a test page')
	res.send('Hello World');
	//res.sendFile('index.html')
	//res.sendFile(path.join(__dirname+'/index.html'));
})


app.post('/weather',(req1,res1) => {
	console.log(req1.body)
	const location = req1.body.location
	const req = unirest("GET", "http://api.weatherapi.com/v1/current.json?key=6b4963ecc52a4861a6814049202012&q="+location);
	req.end(function (res) {
		//if (res.error) throw new Error(res.error);
		//console.log(res.body);
		res1.send(res.body)
	});

})


app.listen(port,() => {
	console.log(`Server Start at 3000 ${port}`);
})
