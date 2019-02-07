describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  it('should initialize with 20 degrees', function() {
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMP)
  });

  it('should increase the temp', function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  });

  it('should decrease the temp by a chosen amount', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  })

  it('should not decrease below 10 degrees', function() {
    for (var i = 0; i < 12; i++) {
    thermostat.down();
    };
    expect(thermostat.temperature).toEqual(10);
  });

  it('should limit temp to 25 if power saving is on', function() {
    for (var i = 0; i < 7; i++) {
    thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25);
  })

  describe("Power saving is off", function() {
    it('should turn off power saving', function(){
      thermostat.powerSavingOff();
      expect(thermostat.powerSaving).toEqual(false);
    });

    it('should have max temp of 32 if power saving is off', function(){
      thermostat.powerSavingOff();
      for (var i = 0; i < 14; i++) {
      thermostat.up();
      };
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
      for (var i = 0; i < 3; i++) {
      thermostat.down();
      };
      expect(thermostat.usage()).toEqual("low");
    });

    it('should return medium usage if temp between 18 and 24 inclusive', function(){
      for (var i = 0; i < 2; i++) {
      thermostat.down()
      };
      expect(thermostat.usage()).toEqual("medium");
      for (var i = 0; i < 6; i++) {
      thermostat.up();
      };
      expect(thermostat.usage()).toEqual("medium");
    });

    it('should return high usage if temp is 25 or more', function(){
      for (var i = 0; i < 7; i++) {
      thermostat.up();
      };
      expect(thermostat.usage()).toEqual("high");
    });
  });

});
