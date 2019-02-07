
function displayWeather(city) {
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
var units = '&units=metric';
$.get(url + token + units, function(data) {
  $('#current-temperature').text(Math.round(data.main.temp));
})
}

$(document).ready(function() {
  let thermostat = new Thermostat();
  displayWeather('London')

  $('#city-submit').click(function(event) {
   event.preventDefault();
   var city = $('#current-city').val();
   displayWeather(city)
  })

  $('#temp').text(thermostat.temperature);

  $('#reset').click(function() {
    thermostat.reset()
    $('#temp').text(thermostat.temperature);
    if (thermostat.usage() === "low") {$("#temp").css("color","green")} else
    if (thermostat.usage() === "medium") {$("#temp").css("color","#CA5231")} else
    $("#temp").css("color","red");
  });

  $('#increaseTempSelect').click(function() {
    thermostat.up();
    $('#temp').text(thermostat.temperature);
    if (thermostat.usage() === "low") {$("#temp").css("color","green")} else
    if (thermostat.usage() === "medium") {$("#temp").css("color","#CA5231")} else
    $("#temp").css("color","red");
  });

  $('#decreaseTempSelect').click(function() {
    thermostat.down();
    $('#temp').text(thermostat.temperature);
    if (thermostat.usage() === "low") {$("#temp").css("color","green")} else
    if (thermostat.usage() === "medium") {$("#temp").css("color","#CA5231")} else
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
