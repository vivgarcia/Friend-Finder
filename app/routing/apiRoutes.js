// Load data from friends.js

var friendsData = require("../data/friends");

// Routing

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    })
}
