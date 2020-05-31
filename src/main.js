var mainSection = document.querySelector('.main-section');
var currentCategory;
var activities = [];
var inputValue = document.querySelectorAll("input");


mainSection.addEventListener('click', handleClick);

function handleClick(event) {
  var parentClass = event.target.parentElement.className;
  var childClass = event.target.className;

  if (parentClass == "category-buttons" || childClass == "button-img") {
    determineButtonStyle(event)
  } else if (childClass == "start-button") {
    startActivity();
  } else if (childClass == "start-clock") {
    var interval = setInterval(countDown, 1000);
  }
}

//Category Button Functions
function identifyButton(event) {
  return event.target.id;
}

function deactivateButton() {
  var active;
  var notActive;
  for ( i = 0; i < 3; i++ ){
      document.querySelectorAll("button")[i].style.color = "#FFF";
      document.querySelectorAll("button")[i].style.borderColor = "#FFF";

      active = document.querySelectorAll("button")[i].innerHTML;
      notActive = active.replace("-active", "");
      document.querySelectorAll("button")[i].innerHTML = notActive;
  }
}

function determineButtonStyle(event) {
  var id = identifyButton(event);
  var color;
  var src;
  currentCategory = id;

  if (id == "studyButton") {
    color = "#B3FD78";
    src = "./assets/study-active.svg";
  } else if (id == "meditateButton") {
    color = "#C278FD";
    src = "./assets/meditate-active.svg";
  } else if (id == "exerciseButton") {
    color = "#FD8078";
    src = "./assets/exercise-active.svg";
  }

  document.querySelector('.start-clock').style.borderColor = color;

  colorButton(id, color, src);
}

function colorButton(id, color, src) {
  deactivateButton();
  document.getElementById(id).style.color = color;
  document.getElementById(id).style.borderColor = color;
  document.querySelectorAll(`#${id}`)[1].src = src;
}
//start button

function startActivity() {
  var error = valueCheck();
  if (error !== "Go") {
    var errorImage = '<img src="assets/warning.svg" class="warning"/>'
    document.querySelector(".error").innerHTML = errorImage + error;
  } else {
  saveActivity();
  hideElement(document.querySelector(".activity-maker"));
  showElement(document.querySelector(".clock-view"));
  setUpClock();
  }
}

function valueCheck() {
  debugger;
  if (inputValue[0].value === "") {
    return "A description is required";
  } else if (inputValue[1].value === "") {
    return "Please include how many minutes you would like to do the activity";
  } else if (inputValue[2].value === "") {
    return "Please include how many seconds you would like to do the activity";
  } else if (currentCategory === undefined) {
    return "Select a category button";
  } else if (inputValue[2].value.length > 2) {
    return "Please only enter two digits into the seconds field";
  } else {
    return "Go";
  }
}


function saveActivity() {
  var description = inputValue[0].value;
  var minutes = inputValue[1].value;
  var seconds = inputValue[2].value;
  var newActivity = new Activity(currentCategory, description, minutes, seconds)

  activities.push(newActivity)
}

function hideElement(element) {
  element.classList.add("hidden")
}

function showElement(element) {
  element.classList.remove("hidden");
}

function setUpClock() {
 document.querySelector(".activity-description").innerText = activities[0].description;
 document.querySelector(".remaining-time").innerText = `${activities[0].minutes}:${activities[0].seconds}`;
}

function countDown() {
  var stringTime = document.querySelector(".remaining-time").innerText;
  var countMinuteMS = Number(stringTime.slice(0, -3)) * 60000;
  var countSecondMS = stringTime.slice(-2, stringTime.length) * 1000;
  var timeMS = countMinuteMS + countSecondMS;

  timeMS -= 1000;

  var reminutes = (timeMS - (timeMS % 60000)) / 60000;
  var reseconds = timeMS % 60000 / 1000;

  if(timeMS <= 0) {
    document.querySelector(".remaining-time").innerText = `0:00`;
  } else if (reseconds < 10) {
    reseconds = `0${reseconds}`;
    document.querySelector(".remaining-time").innerText = `${reminutes}:${reseconds}`;
  } else {
    document.querySelector(".remaining-time").innerText = `${reminutes}:${reseconds}`;
  }
}
