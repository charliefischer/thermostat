$(document).ready(() => {
  let thermostat = new Thermostat();
  updateEnergyUsage = () => $('.energyUsage').text(thermostat.energyUsage());
  updateTemperature = () => $('#temperature').text(thermostat.currentTemperature);
  updateTemperature();

  $('#increase_temp').click(() => {
    thermostat.increaseTemperature();
    updateTemperature();
    updateEnergyUsage();
  })

  $('#decrease_temp').click(() => {
    thermostat.decreaseTemperature();
    updateTemperature();
    updateEnergyUsage();
  })

  $('#powerSaveButton').click(() => {
    thermostat.powerSavingSwitch();
    thermostat.isPowerSaving() ? $('#powersave').text('on') : $('#powersave').text('off');
    updateTemperature();
    updateEnergyUsage();
  })

  $('.reset').click(() => {
    thermostat.reset();
    updateTemperature();
    updateEnergyUsage();
  })

})
