//global variables
var activities = retrieveFromStorage() || [];
var color;
var currentCategory;
var inputValue = document.querySelectorAll("input");
var mainSection = document.querySelector('.main-section');
//event handler
mainSection.addEventListener('click', handleClick);
window.onload = logActivity;

function handleClick(event) {
  var parentClass = event.target.parentElement.className;
  var childClass = event.target.className;

  if (parentClass == "category-buttons" || childClass == "button-img") {
    determineButtonStyle(event)
  } else if (childClass == "start-button") {
    startActivity();
  } else if (childClass == "start-clock") {
    disableClockStartBtn();
    activities[0].countDown();
  } else if (childClass == "log-button") {
    logActivity();
  } else if (childClass == "home") {
    bringHome();
  }
}
//short hand functions
function hideElement(element) {
  document.querySelector(element).classList.add("hidden");
}

function showElement(element) {
  document.querySelector(element).classList.remove("hidden");
}
//Category Button Functions
function identifyButton(event) {
  return event.target.id;
}

function deactivateButton() {
  var activeImgs;
  var notActiveImg;
  for ( i = 0; i < 3; i++ ){
      document.querySelectorAll("button")[i].style.color = "#FFF";
      document.querySelectorAll("button")[i].style.borderColor = "#FFF";

      activeImgs = document.querySelectorAll("button")[i].innerHTML;
      notActiveImg = activeImgs.replace("-active", "");
      document.querySelectorAll("button")[i].innerHTML = notActiveImg;
  }
}

function determineButtonStyle(event) {
  var id = identifyButton(event);
  var src;
  currentCategory = id;

  if (id == "Study") {
    color = "#B3FD78";
    src = "./assets/study-active.svg";
  } else if (id == "Meditate") {
    color = "#C278FD";
    src = "./assets/meditate-active.svg";
  } else if (id == "Exercise") {
    color = "#FD8078";
    src = "./assets/exercise-active.svg";
  }

  colorButton(id, color, src);
}

function colorButton(id, color, src) {
  deactivateButton();
  document.getElementById(id).style.color = color;
  document.getElementById(id).style.borderColor = color;
  document.querySelectorAll(`#${id}`)[1].src = src;

  document.querySelector('.start-clock').style.borderColor = color;
  document.querySelector('.decoy-button').style.borderColor = color;
}
//start clock page
function startActivity() {
  hideElement(".home-button-section");
  var error = valueCheck();
  if (error !== "Go") {
    var errorImage = '<img src="assets/warning.svg" class="warning"/>'
    document.querySelector(".error").innerHTML = errorImage + error;
  } else {
  saveActivity();
  viewClock();
  setUpClock();
  }
}

function valueCheck() {
  if (inputValue[0].value === "") {
    return "A description is required";
  } else if (inputValue[1].value === "") {
    return "Please include how many minutes you would like to do the activity";
  } else if (inputValue[2].value === "") {
    return "Please include how many seconds you would like to do the activity";
  } else if (currentCategory === undefined) {
    return "Select a category button";
  } else if (inputValue[2].value.length !== 2) {
    return "Please enter two digits into the seconds field";
  } else if (Number(inputValue[1].value) == 0 && inputValue[2].value === "00") {
    return "Unless you're The Flash, give yourself some more time homie"
  } else {
    return "Go";
  }
}

function saveActivity() {
  var description = inputValue[0].value;
  var minutes = inputValue[1].value;
  var seconds = inputValue[2].value;
  var newActivity = new Activity(currentCategory, description, minutes, seconds, color);

  activities.unshift(newActivity);

  activities[0].saveToStorage();
}
// count-down clock functions
function setUpClock() {
 enableClockStartBtn();
 document.querySelector(".activity-description").innerText = activities[0].description;
 document.querySelector(".remaining-time").innerText = `${activities[0].minutes}:${activities[0].seconds}`;
}
// activity log functions
function logActivity() {
  hideElement(".clock-section");
  showElement(".home-button-section");
  var logHtml = "";
  var noActivityMsg = `<h4>You haven't logged any activities. <br />
    Complete the form to the left to get started!</h4>`
  for (i = 0; i < activities.length; i++) {
    if (activities[i].completed === true) {
      logHtml += makeCard(activities[i], color);
    }
  }
  if (activities.length === 0) {
  document.querySelector(".activity-cards").innerHTML = noActivityMsg;
  } else {
  document.querySelector(".activity-cards").innerHTML = logHtml;
  }
}

function retrieveFromStorage() {
  return JSON.parse(localStorage.getItem("activities"))
}

function makeCard(activity, color) {
  var secondInfo = "";
  if (Number(activity.seconds) > 0) {
    secondInfo = `${activity.seconds} SEC`;
  }
  return `<div class="card">
    <div class="card-info">
      <h3>${activity.category}</h3>
      <h1>${Number(activity.minutes)} MIN ${secondInfo}</h1>
      <p class="card-descrpition">${activity.description}</p>
    </div>
    <div class="line" style="border: 3px solid ${activity.color}">
    </div>
  </div>`
}
//page-view changers
function viewClock () {
  hideElement(".decoy-button");
  hideElement(".activity-maker");
  showElement(".clock-view");
  showElement(".clock-section");
}

function enableClockStartBtn() {
  hideElement(".decoy-button");
  showElement(".start-clock");
}

function disableClockStartBtn() {
  showElement(".decoy-button");
  hideElement(".start-clock");
}

function bringHome() {
  showElement(".activity-maker");
  hideElement(".home-button-section");
  hideElement(".clock-view");
  hideElement(".decoy-button");
  hideElement(".log-button");
  document.querySelector(".error").innerHTML = "";
  document.querySelector(".complete").innerText = "";
  clearFields();
}

function clearFields() {
  for (i = 0; i < 3; i++) {
    inputValue[i].value = "";
  }
  deactivateButton();
}
