$(document).ready(function() {

  $('#button').on('click', ajax);

  function ajax() {
    var keyword = $("#keyword").val();

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?",
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        $('.content').html('');
        for(var i=0; i<data[1].length; i++){
        $('.content').append("<li><a href=" +data[3][i]+ " target=blank class=title>" + data[1][i] + "</a><p class=description>" +data[2][i]+"</p></li>");
        }
        $('#keyword').val('');
      },
      error: function() {
        alert("Error retrieving search results, please refresh the page");
      }
    });

  }
  $('#keyword').keypress(function(e) {
    if(e.which === 13) {
      $('#button').click();
    }
  });
});
