'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10
    this.MAXIMUM_TEMPERATURE_PS = 25
    this.MAXIMUM_TEMPERATURE_NPS = 32

    this.powerSavingMode = true
    this._currentTemperature = this.DEFAULT_TEMPERATURE
  }

  get currentTemperature() {
    return this._currentTemperature
  }

  increaseTemperature() {
    if (this.isMaximumTemperature() === false) {
      this._currentTemperature += 1
      }
    return;
  }

  reset() {
    this._currentTemperature = this.DEFAULT_TEMPERATURE
  }

  decreaseTemperature() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this._currentTemperature -= 1
  }

  isMinimumTemperature() {
    return this._currentTemperature === this.MINIMUM_TEMPERATURE
  }

  isMaximumTemperature() {
    if (this.isPowerSaving() === true) {
      return this._currentTemperature === this.MAXIMUM_TEMPERATURE_PS;
    }
    return this._currentTemperature === this.MAXIMUM_TEMPERATURE_NPS
  }

  isPowerSaving() {
    return this.powerSavingMode
  }

  powerSavingSwitch() {
    this.powerSavingMode = !this.powerSavingMode;
    if (this.isPowerSaving() && this._currentTemperature > 25) {
      this._currentTemperature = 25;
    }
  }

  // switchOffPowerSaving(){
  //   return this.powerSavingMode = false;
  // }
  //
  // switchOnPowerSaving(){
  //   return this.powerSavingMode = true;
  // }

  energyUsage() {
    if (this.currentTemperature < 18) {
      return "low"
    }
    else if (this.currentTemperature <= 25) {
      return "medium"
    }
    return "high"
  }

}
