//Dependencies
var express = require("express");
var path = require("path");
// Create express server
var app = express();
// Sets the PORT for listener and allows Heroku to choose PORT
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// Listener
app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});