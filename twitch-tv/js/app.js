$(document).ready(function ajax() {

  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]

  channels.forEach(function(channel) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' +channel, function(data) {
    console.log(data, data.display_name, data.url, data.logo);
    $('#name').append('<li>' +channel+ '</li>');
    $('#logo').append('<li id="left"><img src=' +data.logo+ '></li>');
    if(data.mature === false || data.mature === null) {
      $('#status').append('<li id="right"><a href=' +data.url+ ' target="blank" class="offline">Offline</a></li>');
      $('#content').append('<li>No content available</li>');
    } else {
      $('#status').append('<li id="right"><a href=' +data.url+ ' target="blank" class="live">Live</li>');
      $('#content').append('<li>' +data.status+ '</li>');
    }
  });
});

});
