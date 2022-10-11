const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
    weatherBlock.innerHTML = `<div class="weather_loading">
                                <img src="./Images/loading....gif" alt="loading...">
                              </div>`;

    const Server = 'https://knu_god:1ta2Wc1HEk@api.meteomatics.com/2022-10-11T13:00:00.000+03:00/t_2m:C/50.4500336,30.5241361/html?model=mix'

    const response = await fetch(Server, {
        method: 'GET',
    })

    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    }
    else {
        weatherBlock.innerHTML = responseResult.message;
    }

}

function getWeather(data) {
    console.log(data)
}

if (weatherBlock) {
    loadWeather();
}