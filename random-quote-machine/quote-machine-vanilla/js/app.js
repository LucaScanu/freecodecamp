var quotes = [
  { id: 0, name: 'It’s really hard to maintain a one-on-one relationship if the other person is not going to allow me to be with other people.', author: 'Axl Roses' },
  { id: 1, name: 'I’d rather be dead than singing Satisfaction when I’m forty-five.', author: 'Mick Jagger' },
  { id: 2, name: 'Predictions are difficult, especially about the future.', author: 'Sherlock' },
  { id: 3, name: 'I get to go to lots of overseas places, like Canada.', author: 'Britney Spears' },
  { id: 4, name: 'I think gay marriage is something that should be between a man and a woman.', author: 'Arnold Schwarzenegger' },
  { id: 5, name: 'Our enemies are innovative and resourceful, and so are we. They never stop thinking about new ways to harm our country and our people, and neither do we.', author: 'George W. Bush' }
];

var colors = [
  '#70ADAA',
  '#FF6833',
  '#187313',
  '#39729C',
  '#7B58A4'
];

window.onload = function() {
  document.getElementById("button").addEventListener("click", newQuote);

  function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotedDisplay').innerHTML = '<i class="fa fa-quote-left" aria-hidden="true"></i> ' +  quotes[randomNumber].name + ' <i class="fa fa-quote-right" aria-hidden="true"></i>' + '<p>- ' + quotes[randomNumber].author + '.</p>';
    document.getElementById("tweet-quote").setAttribute('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quotes[randomNumber].name + '" ' + '' + quotes[randomNumber].author));
    newColor();
  }

  function newColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    document.getElementsByTagName('BODY')[0].style.backgroundColor = colors[randomColor];
    document.getElementsByTagName('BODY')[0].style.color = colors[randomColor];
    document.getElementById('button').style.backgroundColor = colors[randomColor];
    document.getElementById('twitter').style.backgroundColor = colors[randomColor];
  }
}
