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
            // console.log(newFriend[i]);
            if(newFriend[i] == "1 (Strongly Disagree)"){
                newFriend[i] == 1;
            }else if(newFriend[i] == "5 (Strongly Agree)"){
                newFriend[i] == 5;
            }else {
                newFriend[i] = parseInt(newFriend[i]);
            }
        }

        var comparisonArray = [];

        for(var i = 0; i < friendsMatch.length-1; i++){
            var comparedFriend = friendsMatch[i];
            // console.log(friendsMatch[i]);

            var difference = 0;

            for(var j = 0; j < comparedFriend.scores.length; j++){
                // console.log(comparedFriend.scores[j]);
                var differenceOfScore = Math.abs(comparedFriend.scores[j] - newFriend[j])
                difference += differenceOfScore;
            }
            comparisonArray[i] = difference;
            console.log(differenceOfScore);
        }
        var bestfriendNum = comparisonArray[0];
        var bestFriend = 0;

        for(var k = 0; k < comparisonArray.length; k++){
            if(comparisonArray[i] < bestfriendNum){
                bestfriendNum = comparisonArray[i];
                bestFriend = i;
            }
        }
        friendsMatch.push(newFriend);

        res.json(friendsMatch[bestFriend])
    });
};
