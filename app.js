var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressHbs = require("express-handlebars");
var mongoose = require("mongoose");
// var sessions = require("express-sessions");
// var csrf = require("csurf");

var indexRouter = require("./routes/index");

var app = express();

// DB config
var URI = require("./config/keys").MongoURI;

// Connect to Mongo
mongoose
  .connect(
    "mongodb+srv://qwerty:pranav1234@cluster0-3szaz.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongDB Connected on port 5500"))
  .catch((err) => console.log(err));

// view engine setup
app.engine(
  ".hbs",
  expressHbs({
    defaultLayout: "layout",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(
//   sessions({ secret: "secret", resave: false, saveuninitialized: false })
// );
// app.use(csrf());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
