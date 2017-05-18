$(document).ready(function() {

  $('#button').on('click', ajax);

  function ajax() {
    var keyword = $("#keyword").val();
    // console.log(keyword);
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?",
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        $('.content').html('');
        for(var i=0; i<data[1].length; i++){
        $('.content').prepend("<li><a href=" +data[3][i]+ ">" + data[1][i] + "</a></li>");
        }
      },
      error: function() {
        alert("Error retrieving search results, please refresh the page");
      }
    });
  }
});


// "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + keyword + ""
