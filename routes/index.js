var express = require("express");
// var csrf = require("csurf");
var Product = require("../models/product");

var router = express.Router();

// var csrfProtection = csrf();
// router.use(csrfProtection);

/* GET home page. */
router.get("/", function (req, res, next) {
  Product.find(function (err, docs) {
    res.render("shop/index", { title: "Shopping Cart ", products: docs });
  });
});

// router.get("/user/signup", function (req, res, next) {
//   res.render("/user/signup", { csrfToken: req.csrfToken() });
// });

module.exports = router;
