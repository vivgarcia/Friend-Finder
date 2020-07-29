// Load data from friends.js

var friends = require("../data/friends.js");

// Routing
module.exports = function(app){
    // displays all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    // Handles incoming survery results from survey.html
    app.post("/api/friends", function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;

        // console.log(userData)

        for(var i = 0; i < friends.length; i++){
            var currentFriend = friends[i];
            totalDifference = 0;
            // console.log(currentFriend)

            for(var j = 0; j < currentFriend.scores.length; j++){
                let currentFriendScore = currentFriend.scores[j];
                let currentUserScore = userScores[j];
                // console.log(`current friend score: ${currentFriendScore}`)
                // console.log(`current user score: ${currentUserScore}`)

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if(totalDifference <= bestMatch.friendDifference){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        friends.push(userData);
        // console.log(bestMatch);
        
        console.log("New User Added")
        // console.log(userData);
        res.json(bestMatch);

    });
};