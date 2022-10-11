const weatherBlock = document.querySelector('#weather');
const Server = 'https://knu_god:1ta2Wc1HEk@api.meteomatics.com/2022-10-11T13:00:00.000+03:00/t_2m:C/50.4500336,30.5241361/html?model=mix'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://knu_god:1ta2Wc1HEk@api.meteomatics.com//t_2m:C/50.4500336,30.5241361/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    fetch("http://knu_god:1ta2Wc1HEk@api.meteomatics.com/2022-10-11T00:00:00ZP3D:PT6H/msl_pressure:hPa/50.4500336,30.5241361/json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));