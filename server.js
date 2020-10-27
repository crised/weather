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

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

app.get('/proj', function (req, res) {
    res.send(projectData);
});

let id = 0;
app.post('/proj', function (req, res) {
    const data = req.body;
    console.log(data);
    // const obj = {temperature: data.temperature,
    //     date: date,
    //     userResponse: userResponse};
    // projectData[++id] = obj;
});


// Setup Server
