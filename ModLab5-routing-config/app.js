// if the SERVER is not working:
// Did you install Express?

// If the page is throwing an ERROR 
// Is your file structure right and the app.js file in the root of your app?

var express = require('express');
var app = express();
app.use(express.static('public'));

// the function below is telling Node.js to return the static index.html file from the public folder for any non-static requests.
// this is necessary for the Angular routing.
// most functions in Express use a similar pattern with a function containing the req (request) object and res (response) object.
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(2319, function () {
    console.log('Our app is listening on port 2319!');
});

// There are different conventions for directory structure. There is no right or wrong, but remember it's best to follow an agreed upon convention.
// The most common is the first structure we have used, but the second is a convention as well:
// app - app.js | HomeController.js | ItemsController.js | home - index.html | items - index.html
// app - app.js | views - home.html, items.html | controllers - HomeController.js, ItemsController.js