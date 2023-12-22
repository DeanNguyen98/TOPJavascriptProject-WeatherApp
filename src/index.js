import { getWeatherData } from "./weatherApi";

const searchinput = document.querySelector(".search-input");
const searchform = document.querySelector(".search-form");
const searchbutton = document.querySelector(".search-submit");

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
})

searchbutton.addEventListener("click", async () => {
    getWeatherData(searchinput.value);
} )

