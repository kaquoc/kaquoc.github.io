var button= document.querySelector('#button');
button.addEventListener("click",() => {
//add function here
/**this function utilize Geolocation API, but not all browsers supported them, so we need to wrap them 
 * arround an if statement.
 * getCurrentPosition function request the user location, it takes in two callback functions as argument, 
 * one for success and one for failure
 * 
 */
window.navigator.geolocation
  .getCurrentPosition(success,console.log);
});

function success(position) {
    console.log(position);
}

