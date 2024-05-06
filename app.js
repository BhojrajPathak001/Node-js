const path = require("path");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const authRoutes = require("./routes/auth");
const session = require("express-session");
const MongoDbStore = require("connect-mongodb-session")(session);
const MONGODB_URI = `mongodb+srv://bhojrajpathak:kcucA3wliearQpM4@cluster0.90qm6ik.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
const store = new MongoDbStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  User.findById("6635ddbd03b03bfbe94e0d0b")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    User.find()
      .then((user) => {
        if (user.length === 0) {
          const user = new User({
            name: "bhojraj",
            email: "bhojrajpathak@gmail.com",
            cart: {
              items: [],
            },
          });
          console.log("user created and saved");
          user.save();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(3000);
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
