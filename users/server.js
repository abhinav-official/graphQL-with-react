var express = require("express");
var expressGraphQL = require("express-graphql");
var schema = require("./schema/schema");

var app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
