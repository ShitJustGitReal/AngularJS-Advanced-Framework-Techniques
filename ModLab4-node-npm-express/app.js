// use require() so Node scans the node_modules folder for a package named 'express', and pulls that as a dependency into your file
var express = require('express');
var app = express();

// tell Express to serve up static files from their directories and optionally alias them
app.use(express.static('public'));
app.use('/angular', express.static('node_modules/angular'));
app.use('/jquery', express.static('node_modules/jquery'));
app.use('/popper', express.static('node_modules/popper.js'));
app.use('/bootstrap', express.static('node_modules/bootstrap'));
// Warning: Exposing files in the node_modules** folder is a bad practice and is only done here for demonstration purposes

// launch the Express web server, and listen on a particular Port
app.listen(2319, function () {
    console.log('Our app is listening on port 2319!');
});

// START SERVER COMMAND in a Command Prompt window
// 1. Go to this project's directory
// 2. Type 'node app.js' and press ENTER
// 3. Browse to http://localhost:2319/
// 4. Stop the server by pressing CTRL + C

// INSTALL ANGULAR and BOOTSTRAP
// 1. Go to this project's directory
// 2. Type: npm install angular@1.6.9 jquery popper.js bootstrap --save

    
