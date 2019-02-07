function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.powerSaving = true
  this.MAX_PSM_ON = 25
  this.MAX_PSM_OFF = 32
}

Thermostat.prototype.up = function () {
  if (this.powerSaving === true) {
    this._increase(this.MAX_PSM_ON)
  } else {
    this._increase(this.MAX_PSM_OFF)
  }
};

Thermostat.prototype.down = function () {
  (this.temperature - 1) >= 10 ? this.temperature -= 1 : this.temperature = 10
};

Thermostat.prototype.powerSavingOff = function () {
    this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function () {
    if (this.temperature > 25) { this.temperature = 25 };
    this.powerSaving = true;
};

Thermostat.prototype._increase = function(number) {
  (this.temperature + 1) <= number ? this.temperature += 1 : this.temperature = number
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP
};

Thermostat.prototype.usage = function () {
  if(this.temperature < 18) { return 'low' } else
  if (this.temperature >= 25) { return 'high' } else
  return 'medium'
};
