function Clock(time) {
  this.time = time;
}

Clock.prototype.alarm = function () {
  counter = true;
  setInterval(function(){
    if (this.time === moment().format("HH:mm") && counter === true) {
      alert("wake up!");
      counter = false;
    }
  }, 1000);
};

exports.clockModule = Clock;
