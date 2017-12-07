$(document).ready(function() {

  var randomQuote;
  var randomNum;
  var randomAuthor;

  function getQuote() {

    var quote = ['Look deep into nature, and then you will understand everything better.', 'The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep.', 'There is pleasure in the pathless woods, there is rapture in the lonely shore, there is society where none intrudes, by the deep sea, and music in its roar; I love not Man the less, but Nature more.', 'There is a sacredness in tears. They are not the mark of weakness, but of power. They speak more eloquently than ten thousand tongues. They are the messengers of overwhelming grief, of deep contrition, and of unspeakable love.', "A woman's heart is a deep ocean of secrets."];
    var author = ['-Albert Einstein', '-Robert Frost', '-Lord Byron', '-Washington Irving', '-Gloria Stuart'];



    randomNum = Math.floor((Math.random() * quote.length));
    randomQuote = quote[randomNum];
    randomAuthor = author[randomNum];

    $('.quote').text(randomQuote);
    $('.author').text(randomAuthor);
  }

  $('#twitter').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + randomQuote + randomAuthor);
  });

  $('#clickMe').on('click', function() {
    getQuote();

  });



});
