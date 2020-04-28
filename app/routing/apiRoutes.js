// Load data from friends.js

var friendsMatch = require("../data/friends.js");

// Routing

module.exports = function(app){
    // displays all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friendsMatch);
    });
    // Handles incoming survery results from survey.html
    app.post("/api/friends", function(req, res){
        var newFriend = req.body
        // console.log(newFriend);
        for(var i = 0; i < newFriend.scores.length; i++){

        }
    })
}
