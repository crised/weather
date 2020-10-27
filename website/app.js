/* Global Variables */
const openWeatherApiKey = 'f1ee58157d6ebd35f1924b75f633d249';
const generateButton = document.getElementById('generate');
const zipInput = document.getElementById('zip');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const getWeather = async (zip, key) => {
    console.log('here');
    if (zip.length != 5) {
        console.log('Bad zip');
        return;
    }
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`;
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
}

const postWeatherData = async (temperature, date, userResponse) => {

    const transfer = {temperature, date, userResponse};
    const body = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(transfer)
    };

    const response = await fetch('proj', body);
    try {
        const newData = await response.json();
        console.log(newData);
    } catch (error) {
        console.log('error', error);
    }

};

const generateButtonCb = function () {
    console.log('here');
    // getWeather(zipInput.value, openWeatherApiKey);
    postWeatherData(12, newDate, 'UserResponse!');
}

// Event listeners
generateButton.addEventListener('click', generateButtonCb);
