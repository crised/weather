/* Global Variables */
const openWeatherApiKey = 'f1ee58157d6ebd35f1924b75f633d249';
const generateButton = document.getElementById('generate');
const feelings = document.getElementById('feelings');
const zipInput = document.getElementById('zip');
const dateDiv = document.getElementById('date');
const tempDiv = document.getElementById('temp');
const contentDiv = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const getWeather = async (zip, key) => {
    if (zip.length != 5) {
        console.log('Bad zip');
        return;
    }
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=metric`;
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
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
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

const promiseChain = function () {
    getWeather(zipInput.value, openWeatherApiKey)
        .then((data) => {
            return postWeatherData(data.main.temp, newDate, feelings.value);
        }).then((data) => {
        dateDiv.innerText = data.date;
        tempDiv.innerText = data.temperature;
        contentDiv.innerText = data.userResponse;
    });
}

// Event listeners
generateButton.addEventListener('click', promiseChain);
