$(document).ready(() => {
  let thermostat = new Thermostat();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', (data) => {
    $('#current-temperature').text(data.main.temp);
  })

  updateTemperature = () => {
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    // $('.energyUsage').text(thermostat.energyUsage())
  };
  updateTemperature();

  $('#increase_temp').click(() => {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#decrease_temp').click(() => {
    thermostat.decreaseTemperature();
    updateTemperature();
  })


  $('#powerSaveButton').click(() => {
    thermostat.powerSavingSwitch();
    thermostat.isPowerSaving() ? $('#powersave').text('on') : $('#powersave').text('off');
    updateTemperature();
  })

  $('.reset').click(() => {
    thermostat.reset();
    updateTemperature();
  })

  displayWeather = city => {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=' + API_KEY;
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#display-city').text(city);
    })
  }

  displayWeather('London');

  $('#select-city').submit( event => {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  console.log(process.env);

})
