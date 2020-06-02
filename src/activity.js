class Activity {
  constructor(category, description, minutes, seconds, color) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.color = color;
  }

  countdown() {

  }

  markComplete() {

  }

  saveToStorage() {
    localStorage.setItem( "activities", JSON.stringify(activities));
  }
}
