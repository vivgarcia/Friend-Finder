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
        var newFriend = req.body.scores
        // console.log(newFriend);
        for(var i = 0; i < newFriend.length; i++){
            console.log(newFriend[i]);
            if(newFriend[i] == "1 (Strongly Disagree)"){
                newFriend[i] == 1;
            }else if(newFriend[i] == "5 (Strongly Agree)"){
                newFriend[i] == 5;
            }else {
                newFriend[i] = parseInt(newFriend[i]);
            }
        }
    })
}
