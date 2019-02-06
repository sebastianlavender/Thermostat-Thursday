function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.powerSaving = true
  this.MAX_PSM_ON = 25
  this.MAX_PSM_OFF = 32
}

Thermostat.prototype.up = function (amount) {
  if (this.powerSaving === true) {
    this._increase(amount, this.MAX_PSM_ON)
  } else {
    this._increase(amount, this.MAX_PSM_OFF)
  }
};

Thermostat.prototype.down = function (amount) {
  (this.temperature - amount) >= 10 ? this.temperature -= amount : this.temperature = 10
};

Thermostat.prototype.powerSavingOff = function () {
    this.powerSaving = false
};

Thermostat.prototype.powerSavingOn = function () {
    this.powerSaving = true
};

Thermostat.prototype._increase = function(amount, number) {
  (this.temperature + amount) <= number ? this.temperature += amount : this.temperature = number
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP
};

Thermostat.prototype.usage = function () {
  if(this.temperature < 18) { return 'low' } else
  if (this.temperature >= 25) { return 'high' } else
  return 'medium'
};
