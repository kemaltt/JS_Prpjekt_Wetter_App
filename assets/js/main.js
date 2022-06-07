//=========================================================

//Your API key is: 0ebb12e9335b4c5c02f802aa1709b8ab

//    <div id="openweathermap-widget-11"></div>
// <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script><script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '2921044',appid: '0ebb12e9335b4c5c02f802aa1709b8ab',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>

let inputCity = document.getElementById("input_city");
let search_icon = document.getElementById("search_icon");
let wetterDisplay = document.getElementById("weather");
let icon = document.getElementById("icon");
let Cloudy = document.getElementById("cloudy");
let current_temp = document.getElementById("current_temp");
let city_name = document.getElementById("city_name");
let current_date_time = document.getElementById("current_date_time");
let country = document.getElementById("country");
let detail = document.getElementById("detail");
let detail_temp = document.getElementById("detail_temp");
let humidity = document.getElementById("humidity");
let wind_speed = document.getElementById("wind_speed");
let sunRise = document.getElementById("sunrise");
let sunSet = document.getElementById("sunset");
let cities_list = document.querySelector(".cities_list");
let list_display = document.querySelectorAll("#list_display");


setInterval(() => {
    let currentDate = new Date().toUTCString().slice(0, 16);
    let currentTime = new Date().toLocaleTimeString().slice(0, 8);
    current_date_time.innerHTML = `${currentDate} , ${currentTime} `;
}, 1000);

let getCity = () => {
    let cityName = inputCity.value;
    let apiKey = "0ebb12e9335b4c5c02f802aa1709b8ab";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            // console.log(new Date(json.dt * 1000));
            let sunrise = new Date(json.sys.sunrise * 1000)
                .toLocaleTimeString()
                .slice(0, 5);
            let sunset = new Date(json.sys.sunset * 1000)
                .toLocaleTimeString()
                .slice(0, 5);

            // current_temp.innerHTML = `${Math.floor(json.main.temp)}℃`
            // icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
            // icon.alt = `${json.weather[0].description}`
            //     // document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${json.name}`
            // Cloudy.innerHTML = `${(json.weather[0].description).toUpperCase()}`
            // city_name.innerHTML = `${json.name}   <i class="las la-map-marker"></i>`

            // country.innerHTML = `${json.sys.country}`
            //     // detail.innerHTML = `Cloudy: ${json.weather[0].description}`
            // detail_temp.innerHTML = `${Math.floor(json.main.temp_max)}℃ / ${Math.floor(json.main.temp_min)}℃ feels like ${Math.floor(json.main.feels_like)}℃`
            // humidity.innerHTML = `Humidity : ${json.main.humidity} %`
            // wind_speed.innerHTML = `Wind speed : ${json.wind.speed} m/s`
            // sunRise.innerHTML = `Sunrise: ${sunrise} am`
            // sunSet.innerHTML = `Sunset: ${sunset} pm`
            // wetterDisplay.classList.add('wetter')
            // document.querySelector('a').innerHTML = 'X'

            let weather = ` <div id="weather">
<div class="weather_display">
    <h1 id="current_temp">${Math.floor(json.main.temp)}℃</h1>
    <div class="weather_icon">
        <img src="http://openweathermap.org/img/wn/${
          json.weather[0].icon
        }@2x.png" id="icon" alt="${json.weather[0].description}">
        <p id="cloudy">${json.weather[0].description.toUpperCase()}</p>
    </div>

</div>
<h3 id="city_name">${json.name}   <i class="las la-map-marker"></i></h3>
<p id="country">${json.sys.country}</p>

<p id="detail"></p>
<p id="detail_temp">${Math.floor(json.main.temp_max)}℃ / ${Math.floor(
        json.main.temp_min
      )}℃ feels like ${Math.floor(json.main.feels_like)}℃</p>
<p id="humidity">Humidity : ${json.main.humidity} %</p>
<p id="wind_speed">Wind speed : ${json.wind.speed} m/s</p>
<p id="sunrise">Sunrise: ${sunrise} am</p>
<p id="sunset">Sunset: ${sunset} pm</p>
<i id="delete_icon" class="lar la-trash-alt"></i>
</div> 
`;

            cities_list.innerHTML += `<li id="list_display">${weather}</li>`;

            let delete_icon = document.querySelectorAll("#delete_icon");


            delete_icon.forEach((icon) => {
                icon.addEventListener("click", (e) => {
                    e.target.parentElement.parentElement.remove();
                });
            })



            if (json.weather[0].main === 'Clear') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80")';
                document.getElementById('input_city').style.textAlign = 'center';
                current_date_time.style.color = 'white';
            } else if (json.weather[0].main === 'Clouds') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")';
                document.getElementById('input_city').style.textAlign = 'center';
                document.getElementById('input_city').style.color = 'black';
                current_date_time.style.color = 'white';

            } else if (json.weather[0].main === 'Rain') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
                document.getElementById('input_city').style.textAlign = 'center';
                document.getElementById('input_city').style.color = 'white';
                current_date_time.style.color = 'white';
            } else if (json.weather[0].main === 'Mist') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1466226629899-41a4623ca86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")';
                document.getElementById('input_city').style.textAlign = 'center';
                document.getElementById('input_city').style.color = 'white';
                current_date_time.style.color = 'white';
            } else if (json.weather[0].main === 'Snow') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1507179938544-5e9eada02714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")';
                document.getElementById('input_city').style.textAlign = 'center';
                document.getElementById('input_city').style.color = 'black';
                current_date_time.style.color = 'black';
            } else if (json.weather[0].main === 'Thunderstorm') {
                document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1509401934319-cb35b87bf39e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
                document.getElementById('input_city').style.textAlign = 'center';
                document.getElementById('input_city').style.color = 'white';
                current_date_time.style.color = 'white';
            }
        });
};

search_icon.addEventListener("click", () => {
    window.onload = getCity();

    inputCity.value = "";
});
inputCity.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        window.onload = getCity();

        inputCity.value = "";
    }
});