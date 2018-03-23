var myNum = Math.floor(Math.random()*10);
var list = [];
var total = 0;

$(document).ready(function() {
  //allows user to hit enter (in addition to clicking submit button)
  $('#guess').keypress(function(e) {
    if(e.keyCode === 13) {
      $('#submit').click();
    }
  });

  $('#submit').click(function() {
    //selects all input elements of type='text'
    var guess = $('input:text').val();
    //input returns a string; have to turn it into number to compare
    var guessNum = parseInt(guess);

    if (guessNum === myNum) {
      $('#previous').empty();
      $('#comment').html(guessNum + ' is the correct guess!! WOOO');
      //shows excited gif to user
      $('#excited').show();
      $('#sad').hide();
    } else {

      //Tells user to guess higher or lower
      if(guessNum < myNum) {
        $('#comment').html('Sorry :( guess higher');
      } else {
        $('#comment').html('Sorry :( guess lower');
      }

      //Tracks user's previous guesses
      list.push(guessNum);
      $('#previous').html('<b>Previous guesses: </b>' + list.join(", "));

      //Tracks how many wrong guesses user made
      total = total + 1;
      $('#tries').html('<b>Number of tries: </b>' + total)

      //shows sad gif to user
      $('#excited').hide();
      $('#sad').show();
    }
    //giving the input type=text tag a value of an empty string --> empty input field (clears after every time user hits enter or click submit button)
    $('input:text').val('');
  })
});
