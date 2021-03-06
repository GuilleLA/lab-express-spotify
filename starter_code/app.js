const express = require('express');
const hbs = require('hbs');

// require spotify-web-api-node package here:

const spotifyRouter = require('./routes/spotify.routes');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// setting the spotify-api goes here:



// the routes go here:

app.use('/', spotifyRouter);

module.exports = app;

app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));
