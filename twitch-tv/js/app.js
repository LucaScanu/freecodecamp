$(document).ready(function() {

  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

  channels.forEach(function(channel) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' +channel, function(data) {
    console.log(data, data.display_name, data.mature, data.logo);
    $('#name').append('<li>' +channel+ '</li>');
    $('#logo').append('<li><img src=' +data.logo+ '></li>');
    if(data.mature === false || data.mature === null) {
      $('#status').append('<li>Offline</li>')
    } else {
      $('#status').append('<li>Live</li>')
    }
  });
});

});
