function appendtoDOm (data) {
    const cityname = document.querySelector(".city");
    const conditionIcon = document.querySelector(".condition")
    const country = document.querySelector(".country");
    const tempt = document.querySelector(".tempt");
    const humidity = document.querySelector(".humidity");
    const windspeed = document.querySelector(".windspeed");
    const container = document.querySelector(".container");
    container.classList.add("active");
    cityname.textContent = data.location.name;
    country.textContent = data.location.country;
    tempt.textContent = `${data.current.feelslike_c}°C`;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    windspeed.textContent = `Wind speed: ${data.current.wind_kph}km/h`;
}   

export {appendtoDOm};

