$(document).ready(function() {

  function ajax() {
    $.ajax({
      url: "https://wind-bow.gomix.me/twitch-api/clips/top?limit=10&game=Overwatch&trending=true",
      action: "GET",
      success: function(data) {
        console.log(data);
      },
      error: function() {
        alert("Error retrieving search results, please refresh the page");
      }
    });
  }
});
