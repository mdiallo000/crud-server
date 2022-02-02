const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createConnection({
	user: "user",
	host: "localhost",
	password: "Booba98@",
	databae: "employeregsystem",
});
app.post("/create", (req, res) => {
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const position = req.body.position;
	const wage = req.body.wage;
});

app.listen(3001, () => {
	console.log("The server is running on Port 3001");
});
