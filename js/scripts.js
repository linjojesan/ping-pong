var numberFun = [];

function pingPong(userNumber) {
  for ( var i = 1; i <= userNumber; i += 1 ) {
    if ((i) % 15 === 0 && (i) !== 0) {
      numberFun.push("pingpong");
    } else if ((i) % 3 === 0 && (i) !== 0){
      numberFun.push("ping");
    } else if ((i) % 5 === 0 && (i) !== 0) {
      numberFun.push("pong");
    } else {
      numberFun.push(i);
    }
  }
}


// User Interface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#yournumber").val();

    if (userNumber <= 0) {
      $("#warning").html("<p>Please make your sure your number is not 1 or 0.</p>");
    } else {
      pingPong(userNumber);
    }
      numberFun.forEach(function(number) {
      $(".numbers").append("<li>" + number + "</li>");
    });
  });
});
//


    


// $(function blink() {
//   $('#blinky').fadeOut(500).fadeIn(500, blink);
// })();
