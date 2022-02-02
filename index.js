const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "Booba98@",
	database: "employeregsystem",
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});
app.post("/create", (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const position = req.body.position;
	const wage = req.body.wage;

	db.query(
		" INSERT INTO employe (name, age, country, position, wage) VALUES (?,?,?,?,?)",
		[name, age, country, position, wage],
		(err, result) => {
			if (err) {
				console.log(err, "error databse was note made");
			} else {
				res.send("Values SEND");
			}
		}
	);
});

app.listen(3006, () => {
	console.log("The server is running on Port 3001");
});
