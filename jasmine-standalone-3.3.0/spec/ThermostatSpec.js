describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  it('should initialize with 20 degrees', function() {
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMP)
  });

  it('should increase the temp by a chosen amount', function(){
    thermostat.up(5)
    expect(thermostat.temperature).toEqual(25)
  });

  it('should decrease the temp by a chosen amount', function(){
    thermostat.down(10);
    expect(thermostat.temperature).toEqual(10);
  })

  it('should not decrease below 10 degrees', function() {
    thermostat.down(11);
    expect(thermostat.temperature).toEqual(10);
  });

  it('should limit temp to 25 if power saving is on', function() {
    thermostat.up(10);
    expect(thermostat.temperature).toEqual(25);
  })

  describe("Power saving is off", function() {
    it('should turn off power saving', function(){
      thermostat.powerSavingOff();
      expect(thermostat.powerSaving).toEqual(false);
    });

    it('should have max temp of 32 if power saving is off', function(){
      thermostat.powerSavingOff();
      thermostat.up(13);
      expect(thermostat.temperature).toEqual(32);
    });
  });

  it('should turn on power saving', function(){
    thermostat.powerSavingOff();
    thermostat.powerSavingOn();
    expect(thermostat.powerSaving).toEqual(true);
  });

  describe("reset", function() {

    it('should reset the temperature to 20', function(){
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMP);
    });
  });

  describe("usage", function() {
    it('should return low usage if temp is under 18', function(){
      thermostat.down(3);
      expect(thermostat.usage()).toEqual("low");
    });

    it('should return medium usage if temp between 18 and 24 inclusive', function(){
      thermostat.down(2)
      expect(thermostat.usage()).toEqual("medium");
      thermostat.up(6)
      expect(thermostat.usage()).toEqual("medium");
    });

    it('should return low usage if temp is 25 or more', function(){
      thermostat.up(5);
      expect(thermostat.usage()).toEqual("high");
    });
  });

});
