

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();

    if (!city) {
        alert('Please enter a city name');
        return;
    }
    getWeather(city);
    getForecast(city);
});




const apiKey = 'a89fee4e8304fdb8230088bc61b6fe4b';


function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temp: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            } else {
                alert('City not found');
            }
        })
        .catch(() => alert('Unable to fetch weather information'));
}

// Fetch and Display 5-Day Forecast

function getForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === "200") {
                const forecastEl = document.getElementById('forecast');
                forecastEl.innerHTML = '';


                const dailyForecast = data.list.filter(item => item.dt_txt.includes('12:00:00'));

                dailyForecast.forEach(day => {
                    const date = day.dt_txt.split(' ')[0]; 
                    const temp = `${day.main.temp}°C`;
                    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

                    forecastEl.innerHTML += `
                        <div style="border: 1px solid #ddd; padding: 10px; margin: 5px;">
                            <p>Date: ${date}</p>
                            <img src="${icon}" alt="Weather Icon" style="width: 50px;">
                            <p>Temp: ${temp}</p>
                        </div>
                    `;
                });
            } else {
                alert('Forecast not available');
            }
        })
        .catch(() => alert('Unable to fetch forecast data'));
}




