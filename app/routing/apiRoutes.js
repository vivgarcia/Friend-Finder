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
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;
        
        var b = userScores.map(function(item){
            return parseInt(item, 10);
        })
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log("Name: " + userName);
        console.log("User Score: " + userScores);

        var sum = b.reduce((a, b) => a+b, 0);
        console.log("Sum of users' scores: " + sum);
        console.log("Difference: " + bestMatch.friendDifference);

        for(var i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total difference: " + totalDifference);
            console.log("Best Math Friend Difference " + bestMatch.friendDifference);

            var bFriendScore = friends[i].scores.reduce((a, b) => a+b, 0);
            console.log("Total Friend Score: " + bFriendScore);
            totalDifference += Math.abs(sum - bFriendScore);
            console.log("---------------> " + totalDifference);

            if(totalDifference <=  bestMatch.friendDifference){
                bestMatch.name = friend[i].name;
                bestMatch.photo = friend[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference ")
        }

        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added")
        console.log(userData);
        res.json(bestMatch);

    });
};
