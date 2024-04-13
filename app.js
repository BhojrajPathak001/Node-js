const express = require("express");
const app = express();
bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopsRoutes = require("./routes/shops");
const path = require("path");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(shopsRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "notFound.html"));
});

app.listen(3000); //this is same as create server and then listen to the port as in node js
