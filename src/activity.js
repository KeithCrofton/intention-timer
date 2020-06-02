class Activity {
  constructor(category, description, minutes, seconds, color) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.color = color;
    this.timeLeft;
  }

  countDown() {
    var self = this;
    var interval = setInterval(function() {
      self.calculateTime();
      self.printTime(self.timeLeft);
    }, 1000)
  }

  calculateTime() {
    // debugger
    var self = this;
    var remainingTime = document.querySelector(".remaining-time").innerText;
    var minutesLeft = Number(remainingTime.slice(0, -3)) * 60;
    var secondsLeft = Number(remainingTime.slice(-2, remainingTime.length));
    this.timeLeft = minutesLeft + secondsLeft;

    this.timeLeft -=1
  }

  printTime(timeLeft) {
    // debugger
    var minutesLeft = (timeLeft - (timeLeft % 60)) / 60;
    var secondsLeft = timeLeft % 60;

    if (timeLeft == 0) {
      document.querySelector(".remaining-time").innerText = `0:00`;
      this.markComplete();
    } else if (secondsLeft < 10) {
      secondsLeft = `0${secondsLeft}`;
      document.querySelector(".remaining-time").innerText = `${minutesLeft}:${secondsLeft}`;
    } else {
      document.querySelector(".remaining-time").innerText = `${minutesLeft}:${secondsLeft}`;
    }
  }

  markComplete() {
    this.completed = true;
    document.querySelector(".complete").innerText = "COMPLETE!";
    showElement(".log-button");
    clearInterval(interval);
  }

  saveToStorage() {
    localStorage.setItem( "activities", JSON.stringify(activities));
  }
}
