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
  .getCurrentPosition(success,showError);
});

//callback function to handle success
/**getCurrentPosition return an coords object when success
 * which could be access using coords.longitude or coords.latitude
 */
function success(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    console.log(longitude);

    
    //sending a request using JQuerry
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/"
        +longitude+ "/%7Blat%7D/"+
        latitude+
        "/%7Blon%7D/dist/25/",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "9a977024b3msh661b55182095c6cp18eed5jsn8f12205dd548",
            "X-RapidAPI-Host": "adsbx-flight-sim-traffic.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });


}
//callback function to handle error
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
       console.log("An unknown error occurred.");
        break;
    }
  }
