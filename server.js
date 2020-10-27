// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

const server = app.listen(port, listening);
function listening(){
    console.log(server);
    console.log(`running on localhost: ${port}`);
};



// Setup Server
const openWeatherApiKey = 'f1ee58157d6ebd35f1924b75f633d249';
const cityName = 'Miami';
const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherApiKey}`;