//business logic
var pong = function(count) {
  var numberRange = [];
  for (var n = 1; n <= count; number++) {
    if (n % 3 === 0) {
      numberRange.push("Ping");
    } else if ( n % 5 === 0 ) {
      numberRange.push("Pong")
    }  else if (n % 15 === 0) {
      numberRange.push("Ping Pong")
    }
      else {
      numberRange.push(n);
    };
  };
    return numberRange;








//user interface logic
$(document).ready(function() {

  $("form").submit(function(event) {

    var count =parseInt($("#enter").val());
    console.log();

  };
};
// $(function blink() {
//   $('#blinky').fadeOut(500).fadeIn(500, blink);
// })();
