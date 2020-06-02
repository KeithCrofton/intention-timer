class Activity {
  constructor(category, description, minutes, seconds, color) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.color = color;
    this.timeLeft = this.minutes * 60 + this.seconds;
  }

  countDown() {
    var self = this;
    var interval = setInterval(function() {
      self.timeLeft -= 1
      self.printTime(self.timeLeft);
    }, 1000)
  }

  printTime(timeLeft) {
    // debugger
    var minutesLeft = (timeLeft - (timeLeft % 60)) / 60;
    var secondsLeft = timeLeft % 60;
    var remainingTime = document.querySelector(".remaining-time");

    if (timeLeft <= 0) {
      remainingTime.innerText = `0:00`;
      this.markComplete();
    } else if (secondsLeft < 10) {
      secondsLeft = `0${secondsLeft}`;
      remainingTime.innerText = `${minutesLeft}:${secondsLeft}`;
    } else {
      remainingTime.innerText = `${minutesLeft}:${secondsLeft}`;
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
