var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var negociosRouter = require("./negocios");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/negocios/", negociosRouter);

module.exports = app;