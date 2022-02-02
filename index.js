const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

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

	db.query(
		" INSERT INTO employe (name, age, country, position, wage) VALUES( ?,?,?,?,?)"[
			(name, age, country, position, wage)
		],
		(err, res) => {
			if (err) {
				console.log(err);
			} else {
				res.send("Values SEND");
			}
		}
	);
});

app.listen(3001, () => {
	console.log("The server is running on Port 3001");
});
