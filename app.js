const express = require("express");
const app = express();
bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(adminRoutes);

// app.use("/", (req, res, next) => {
//   console.log("parent route");
//   next();
//   // res.send(`<h1>Hello frome Express!</h1>`);
// });
app.use((req, res, next) => {
  console.log("route someting");
  res.send(`<h1>hello from middlware</h1>`);
});

app.listen(3000); //this is same as create server and then listen to the port as in node js
