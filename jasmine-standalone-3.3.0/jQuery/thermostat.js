const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f01f3c1b75b7905650b3dd36ec80b41d'

function getWeather() {
  $.getJSON(weatherAPI).then( function(data) {
    console.log(data.main.temp)
  })
}

$(document).ready(function() {
  let thermostat = new Thermostat();

  $('#outside-temp').text(getWeather());

  $('#temp').text(thermostat.temperature);

  $('#reset').click(function() {
    thermostat.reset()
    $('#temp').text(thermostat.temperature);
    if (thermostat.usage() === "low") {$("#temp").css("color","green")} else
    if (thermostat.usage() === "medium") {$("#temp").css("color","black")} else
    $("#temp").css("color","red");
  });

  $('#increaseTempSelect').click(function() {
    thermostat.up();
    $('#temp').text(thermostat.temperature);
    if (thermostat.usage() === "low") {$("#temp").css("color","green")} else
    if (thermostat.usage() === "medium") {$("#temp").css("color","black")} else
    $("#temp").css("color","red");
  });

  $('#decreaseTempSelect').click(function() {
    thermostat.down();
    $('#temp').text(thermostat.temperature);
    if (thermostat.usage() === "low") {$("#temp").css("color","green")} else
    if (thermostat.usage() === "medium") {$("#temp").css("color","black")} else
    $("#temp").css("color","red");
  });

  $('#powerSaving').click(function() {
    if (thermostat.powerSaving === true) {
      thermostat.powerSavingOff();
      $("span", this).text("Power Saving Off");
      $("#powerSaving").css("background-color","red")
    } else {
      thermostat.powerSavingOn();
      $("span", this).text("Power Saving On");
      $("#powerSaving").css("background-color","green")
    };
    $('#temp').text(thermostat.temperature);
  });

});
