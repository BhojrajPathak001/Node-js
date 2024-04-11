const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("2nd middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000); //this is same as create server and then listen to the port as in node js
