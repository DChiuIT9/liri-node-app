// require("dotenv").config()

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");

// Commands:
// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

function liriaction(commands){
  var userInput = process.argv.slice(3).join(" ");
  switch(commands){
    case "concert-this":
    break;
    case "spotify-this-song":
    break;
    case "movie-this":
      if (userInput == "") {
        axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&i=tt3896198&apikey=trilogy").then(function(response){
          console.log(
            "============== movie-this ==============" +
            "\nTitle: " + response.data.Title +
            "\nYear: " + response.data.Year +
            "\nRating: " + response.data.Rated +
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
            "\nCountry: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors: " + response.data.Actors + "\n"
            );
          console.log("If you haven't watched Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>")
          console.log("It's on Netflix!")
        })
      } else {
        axios.get("http://www.omdbapi.com/?t=" + userInput + "&i=tt3896198&apikey=trilogy").then(function(response){
          console.log(
            "============== movie-this ==============" +
            "\nTitle: " + response.data.Title +
            "\nYear: " + response.data.Year +
            "\nRating: " + response.data.Rated +
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
            "\nCountry: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors: " + response.data.Actors
            );
        })
      };
    break;
    case "do-what-it-says":
      fs.readFile("random.txt", "utf8", function(err, data){
        if (err) {
          console.log(err);
        }


      })
    break;
  }

}

liriaction(process.argv[2])
