//business logic
var pong = function(input)  {
  var numberIndex = [];
  var index = 0;

  for (var index = 0; index <= 3000; index++) {
    if (index % 3 === 0) {
      $("#result").text("Ping");
    } else if ( index % 5 === 0 ) {
      $("#result").text("Pong");
    }  else if (index % 15 === 0) {
      $("#result").text("Ping Pong")
    }
      else {
      $("#result").text(index);
    };
  };
  return numberIndex;
};


    // return numberRange;









//user interface logic
$(function() {
    $("form#input").submit(function(event) {
        event.preventDefault();
    var input = parseInt($("#yournumber").val());

    var game = pong(input);
    games.forEach(function(game) {
      $("#result").text(games);
    });

  });
});



    // console.log(count);


// $(function blink() {
//   $('#blinky').fadeOut(500).fadeIn(500, blink);
// })();
