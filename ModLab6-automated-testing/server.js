
'use strict';
var express = require('express'),
    app = express();
var http = require('http').Server(app);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

console.log('dirname', __dirname);
app.use(express.static(__dirname));
var server = app.listen('3000', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at port:'+ port);
});

module.exports = app;

/* 

///////// INSTALL EXPRESS AND VERIFY THE SERVER IS WORKING //////////

1. Install Express using 'npm install' (it's already defined as a dependency in Package.json)
2. Start the server with 'node server.js'
3. Check http://localhost:3000 to verify the server is working


///////// UNIT TESTING //////////

INSTALL KARMA AND JASMINE
=========================
npm install jasmine jasmine-core --save-dev --> installs jasmine as a project development dependency
npm install karma karma-jasmine -g --> installs Karma and Karma-Jasmine globally
npm install karma-chrome-launcher karma-ie-launcher phantomjs-prebuilt karma-phantomjs-launcher -g --> installs Karma launchers globally

https://stackoverflow.com/questions/32846206/karma-start-cannot-find-module-jasmine-core
npm install jasmine-core -g --save-dev --> installs jasmine-core globally as well. fixed "Error: Cannot find module 'jasmine-core'"

npm install angular@1.5.5 angular-mocks@1.5.5 --save-dev --> installs local (non-CDN) Angular and Angular-mocks as a project development dependency

npm install karma-ng-html2js-preprocessor -g --save-dev --> installs a preprocessor to generate HTML templates in JavaScript before running the unit tests.


GENERATE A CONFIG FILE FOR KARMA
=========================
karma init karma.conf.js --> Generates a config file. 
Press enter repeatedly until the process is complete
Open karma.conf.js and edit this file manually


START THE UNIT TEST
=========================
karma start karma.conf.js --> Starts the test
You can stop the test with CTRL + C


///////// END-TO-END TESTING //////////

1. Install the Java Development Kit on your system:
http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
You need Java to run Selenium

2. Install Protractor globally with npm by typing:
npm install -g protractor.

3. Update the Webdriver Manager by typing:
webdriver-manager update

4. Create a protractor.conf.js file in the root directory


The following steps are required each time you want to run test sessions
=========================

5. Start the Selenium server by typing:
webdriver-manager start

Selenium now runs a separate server for your Webdriver instance at port 4444 (http://localhost:4444), which Protractor communicates with over HTTP

6. Start the node web server in a new terminal by typing:
node server.js

7. Run Protractor in a new terminal by typing:
protractor protractor.conf.js

So in short, run these commands in subsequent new terminals without stopping the servers:
webdriver-manager start
node server.js
protractor protractor.conf.js

Run the last command repeatedly to repeat the test and both servers are still running.

*/