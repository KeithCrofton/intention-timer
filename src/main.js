var mainSection = document.querySelector('.main-section');
var currentCategory;
var activities = [];

mainSection.addEventListener('click', handleClick);

function handleClick(event) {
  var parentClass = event.target.parentElement.className;
  var childClass = event.target.className;

  if (parentClass == "category-buttons" || childClass == "button-img") {
    determineButtonStyle(event)
  } else if (childClass == "start-button") {
    startActivity();
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
  saveActivity();
  hideElement(document.querySelector(".activity-maker"));
}

function saveActivity() {
  var description = document.querySelectorAll("input")[0].value;
  var minutes = document.querySelectorAll("input")[1].value;
  var seconds = document.querySelectorAll("input")[2].value;
  var newActivity = new Activity(currentCategory, description, minutes, seconds)

  activities.push(newActivity)
}

function hideElement(element) {
  element.classList.add("hidden")
}
// startActivity(){
// take the values from the inputs and turn them into
// arguements that get pushed into our activity constuctors
// step 1 remove the activity form
// step 2 place the clock
// }

//form functionality
//target the parent element with a query selector
//add event listener
//create an event handler
//create a funtion that changes the border color while reseting the other border colors/ one that
//changes the border color should also chasnge the image.
