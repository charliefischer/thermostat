$(document).ready(() => {
  let thermostat = new Thermostat();
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















})
