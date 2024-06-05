async function fetchWeather(city = "Delhi") {
    cityName.innerHTML = city; // Update the heading with the city name
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cd69f4c82fmsh3b0b00da8ca3bbbp10744bjsnf2f0208c20dd',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);

        const data = JSON.parse(result); // Parse the result string into an object

        //cloud_pct.innerHTML = data.cloud_pct;
        temp1.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity1.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed1.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetchWeather(city.value); 
});

fetchWeather(); 

