

$(document).ready(function(){
  $('#button').on('click', getQuote);

  function getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quoteDisplay").html('<i class="fa fa-quote-left" aria-hidden="true"></i> ' +  response.quoteText + ' <i class="fa fa-quote-right" aria-hidden="true"></i>' + '<p>- ' + response.quoteAuthor + '.</p>');
        $("#tweet-quote").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
  newColor();
  }


  function newColor() {
    var colors = [
      '#70ADAA',
      '#FF6833',
      '#187313',
      '#39729C',
      '#7B58A4'
    ];

    var randomColor = Math.floor(Math.random() * colors.length);

    $('BODY').css({'background-color': colors[randomColor], 'color': colors[randomColor]});
    $('#button').css('background-color', colors[randomColor]);
    $('#twitter').css('background-color', colors[randomColor]);
  }
});
