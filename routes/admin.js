const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    `<form method='POST'  action='/product' ><input type='text' name='title'/><button type='submit'>add</button></form>`
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body, "body");
  res.redirect("/");
});

module.exports = router;  
