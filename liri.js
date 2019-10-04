var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js")




function searchApi(query){
  switch(query){
    case 'show':
            axios.get('http://api.tvmaze.com/search/shows?q=' + process.argv.slice(3).join("%"))
            .then(function(response){
                // console.log("Title: " + response.data[0].show.name);
                // console.log("Genres: " + response.data[0].show.genres);
                // console.log("Rating: " + response.data[0].show.rating.average);
                // console.log("Network: " + response.data[0].show.network.name);
                // console.log("Summary: " + response.data[0].show.summary);     
                var showData = [`


Title: ${response.data[0].show.name}
Genres: ${response.data[0].show.genres}
Rating: ${response.data[0].show.rating.average}
Network: ${response.data[0].show.network.name}
Summary: ${response.data[0].show.summary}


                `]; 

                fs.appendFile("log.txt", showData, function (err) {
                    if (err) {
                        console.log(err);
                    }                
                    else {
                        console.log("Content Added!");
                    }
                });
                
                console.log(showData);

            })

      break;
    case 'actor':
        var actor = process.argv.slice(3).join("%");
    axios.get("http://api.tvmaze.com/search/people?q=" + actor)
    .then(function(response){
        console.log(`

        Name: ${response.data[0].person.name}
        Birthday: ${response.data[0].person.birthday}
        Gender: ${response.data[0].person.gender}
        Country: ${response.data[0].person.country.name}

        `);
    });

      break;

    default:
      console.log('Search for a TV show or an Actor in the following format:')
      console.log('node app.js tv The Expanse');
      console.log('node app.js actor Jude Law');
      break;
  }
}

searchApi(process.argv[2]);