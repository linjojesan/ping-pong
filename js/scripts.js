var numberFun = [];

var ping = function(number) {
  if (number % 3 === 0 && number !== 0) {
    return true;
  }
};

var pong = function(number) {
  if (number % 5 === 0 && number !== 0) {
    return true;
  }
};

function pingPong(userNumber) {
  for ( var i = 1; i <= userNumber; i += 1 ) {
    if (ping(i) && pong(i)) {
      numberFun.push("pingpong");
    } else if (ping(i)) {
      numberFun.push("ping");
    } else if (pong(i)) {
      numberFun.push("pong");
    } else
      numberFun.push(i);
  }
}


// User Interface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#yournumber").val();

    if (userNumber <= 0) {
      $("#warning").html("<p>Please Enter a Number Above 1. Thank you!</p>");
    } else {
      pingPong(userNumber);
    }

    numberFun.forEach(function(number) {
      $(".numbers").append("<li>" + number + "</li>");
    });
  });
});
//


    // console.log(count);


// $(function blink() {
//   $('#blinky').fadeOut(500).fadeIn(500, blink);
// })();
