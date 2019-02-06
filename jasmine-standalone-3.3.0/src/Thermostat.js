function Thermostat() {
  this.temperature = defaultTemp
  this.powerSaving = true
}

const defaultTemp= 20

Thermostat.prototype.up = function (amount) {
  if (this.powerSaving === true) {
    this._increase(amount, 25)
  } else {
    this._increase(amount, 32)
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
  this.temperature = defaultTemp
};
