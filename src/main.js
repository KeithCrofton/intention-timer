var mainSection = document.querySelector('.main-section');

mainSection.addEventListener('click', handleClick);

function handleClick(event) {
  var parentClass = event.target.parentElement.className
  var childClass = event.target.className

  if (parentClass == "category-buttons" || childClass == "button-img") {
    activateButton(event)
  }
}
//Category Button Functions
function identifyButton(event) {
  return event.target.id;
}

function activateButton(event) {
  var id = identifyButton(event);
  var color;
  var src;
  debugger
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
  document.getElementById(id).style.color = color;
  document.getElementById(id).style.borderColor = color;
  document.querySelectorAll(`#${id}`)[1].src = src;
}

function addActive(event) {

}

//form functionality
//target the parent element with a query selector
//add event listener
//create an event handler
//create a funtion that changes the border color while reseting the other border colors/ one that
//changes the border color should also chasnge the image.
