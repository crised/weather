/* Global Variables */
const openWeatherApiKey = 'f1ee58157d6ebd35f1924b75f633d249';
const generateButton = document.getElementById('generate');
const zipInput = document.getElementById('zip');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const getWeather = async () => {
    const zip = zipInput.value;
    if (zip.length != 5) {
        console.log('Bad zip');
        return;
    }
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${openWeatherApiKey}`;
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
}

// Event listeners
generateButton.addEventListener('click', getWeather);
