var express = require("express");
var models = require("./models");
var expressGraphQL = require("express-graphql");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var schema = require("./schema/schema");

var app = express();

// Replace with your mongoLab URI
var MONGO_URI = "mongodb://abhinav:abhi2050@ds119113.mlab.com:19113/lyricaldb";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

var webpackMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
