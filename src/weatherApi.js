import { appendtoDOm } from "./DOM";

async function getWeatherData (city) {
    try {
        const weatherapi = `http://api.weatherapi.com/v1/current.json?key=2c9b3c2d78284b99bb6194727230712&q=${city}&aqi=no`
        const response = await fetch(weatherapi, {mode: "cors"});
        const weatherdata = await response.json();
        if (!response.ok) {
            throw new Error("Location not found. Try again.")
        }
        appendtoDOm(weatherdata);
        console.log(weatherdata);
    } catch(error) {
        alert(error);
    }
}

export {getWeatherData};