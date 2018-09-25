var express = require("express");
var expressGraphQL = require("express-graphql");

var app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
