const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3005;

app.get("/", (req, res) => res.send("Welcome to WebApp, Please hit /hello or /hello/name after the url !!!"));

app.listen(port, () => console.log(`Application is listening on port ${port}!`));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vm_farms"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MYSQL DB!");
});
app.get('/hello', function (req, res) {
  res.send('Hello Stranger!');
});

app.get('/hello/:name', function (req, res) {
  let name = req.params.name;
  con.query("INSERT INTO greetings (name) VALUES (?)", name, function (error, results, fields) {
    if (error) console.error("error happened!");
  });
  res.send('Hello ' + name + '!')
});