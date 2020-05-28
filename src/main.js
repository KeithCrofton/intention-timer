var mainSection = document.querySelector('.main-section');

mainSection.addEventListener('click', handleClick);

function handleClick(event) {
  var parentClass = event.target.parentElement.className
  var childClass = event.target.className

  if (parentClass == "category-buttons" || childClass == "button-img") {
  }
}

//form functionality
//target the parent element with a query selector
//add event listener
//create an event handler
//create a funtion that changes the border color while reseting the other border colors/ one that
//changes the border color should also chasnge the image.
