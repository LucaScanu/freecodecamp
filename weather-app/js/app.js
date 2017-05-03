$(document).ready(function getWeather() {

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;

    var url =  `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&APPID=e0fcd681870e443882820e6c8c241434&units=metrics`;
    sendRequest(url);
  }

  function sendRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        var weather = {};

        $('.location').html(data.weather[0].description);

      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
});
