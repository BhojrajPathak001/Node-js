const express = require("express");
const app = express();
bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopsRoutes = require("./routes/shops");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopsRoutes);

app.listen(3000); //this is same as create server and then listen to the port as in node js
