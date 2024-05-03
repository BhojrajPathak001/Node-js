const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const app = express();
const shopRoutes = require("./routes/shop");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("66304071a958003f3a9e912a")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user._id, user.cart);
//       next();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://bhojrajpathak:kcucA3wliearQpM4@cluster0.90qm6ik.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((result) => {
    app.listen(3000);
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
