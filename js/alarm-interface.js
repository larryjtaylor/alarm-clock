var Clock = require('./../js/clock.js').clockModule;

function clockDisplay() {
  var date = moment(new Date());
  time = $("#time");
  time.html(date.format('h:mm:ss A'));
}

$(document).ready(function(){
  clockDisplay();
  setInterval(clockDisplay, 1000);

  $("#alarm").submit(function(event) {
    event.preventDefault();
    user_time = $("#input_time").val();
    newClock = new Clock(user_time);
    newClock.alarm();
    $("#times").append("<li>" + user_time + "</li>");
  });
});
