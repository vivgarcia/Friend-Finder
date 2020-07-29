//Dependencies
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
// Create express server
var app = express();
// Sets the PORT for listener and allows Heroku to choose PORT
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vdn.api+json" }));

app.use(express.static("app/public"));
// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// Listener
app.listen(PORT, () => console.log("==> 🌎  Visit on http://localhost:" + PORT));