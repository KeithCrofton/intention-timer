# Intention Timer
###
Intention Timer is a site where you can pursue personal growth and keep track of your accomplishments through manageable chunks of time and focused activity. Fill out the form with your intentions and solely concentrate on your task at hand.

Intention Timer was built with Atom and GitHub, based on a static comp provided by Turing School of Software Design.

## Project Status
###
The project has made it through 5 iterations and has been tested for bugs, which have been addressed. Some additional features could be implemented including activity reflections, pausing the timer, favorites and re-dos. More thorough testing would be needed before product launch.

## Webite Screengrabs

Site Walk Through:    
![Intention Timer walk through](https://github.com/KeithCrofton/intention-timer/blob/master/assets/readme/intention-timer-gif.gif)

Tablet View:  
![Intention Timer tablet view](https://github.com/KeithCrofton/intention-timer/blob/master/assets/readme/ipad-view.gif)

Phone View:  
![Intention Timer phone view](https://github.com/KeithCrofton/intention-timer/blob/master/assets/readme/phone-view.gif)

Bug Prevention & Error Messaging:  
![Intention Timer bug prevention & error messaging](https://github.com/KeithCrofton/intention-timer/blob/master/assets/readme/errors.gif)

## Using the App
###  
* Choose a type of activity
* Enter a description of the activity
* Enter in minutes and seconds
* Press start activity
* Press start button to start timer
* Once the timer completes, you can select log activity
* If you log the activity, a button will appear to create a new activity
* Press create new activity to use the app again

### If you want to contribute

* git clone the repository to your computer
* cd into the repository
* git checkout -b into a new branch
* open your text editor and add or remove functionalities to the site.
* git add and git commit -m to save the changes to your local repository
* git push your changes
* create a new pull request!

## Reflection
###
Intention Timer was completed by [Keith Crofton](https://github.com/KeithCrofton), [Derek Romero](https://github.com/dereklromero13) and [Greyson Elkins](https://www.github.com/GreysonElkins). It was an exploration in working with the DOM, functions over time, and local storage. We also got a lot of practice in HTML and CSS and responsive layout.  

The clock in particular forced us to do a lot of research and utilize new concepts. In addition to working with scope and `setInteval()` we exercised quite a bit of logic to navigate between strings and numbers and teach JavaScript to understand minutes and seconds. We made sure to continually test the functionality of the site as we built it, and managed to include elements which prevent errors (such as the clock returning NaN when receiving unexpected inputs or the user being able to refresh and log incomplete activities).

As a learning project, we approached almost every feature as a team, and probably worked as driver/navigator 90% of the time. We were pleasantly surprised at how efficient this approach was. The other 10% was spent working individually on small tasks which didn't introduce new ideas.

### Future Goals

When re-factoring we could consider the impact of changes on a larger scale. We believe that some aspects of the code may have become unnecessary when other aspects were changed for instance, we originally were using slice methods to pull data from the clock as it counted down and coded contingencies for situations that prevented the clock from working. After moving the countdown function to the activity class, we suspect those contingencies may not be needed.

### In Closing

This was a great process that integrated a lot of the material obtained in class. We were also challenged to seek outside resources to solve some of the problems we ran into that we couldn't solve with our current understanding.

## Resources
###

[Turing Project Guidelines](https://frontend.turing.io/projects/module-1/intention-timer-group.html)  
[MDN Web Docs](https://developer.mozilla.org/en-US/)  
[Stack Overflow](https://stackoverflow.com/questions/16437173/stop-setinterval/16437215)  
[Educative.io](https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript)  
[W3 Schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_replace)
