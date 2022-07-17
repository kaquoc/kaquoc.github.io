var button= document.querySelector('#button');
var callsign = document.querySelector('#callsign');
var type = document.querySelector('#type');
var testButton = document.querySelector('#testButton');

const url = 'https://flightaware.com/live/flight/RPA5765';
const url2 = 'https://vnexpress.net/';
testButton.addEventListener("click", fetchContent(url2));


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
    var user_long = position.coords.longitude;
    var user_lat = position.coords.latitude;
    var my_key = keys.ABDSX_key;

    
    //sending a request using JQuerry
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/"
        +user_lat+
        "/lon/"
        +user_long+
        "/dist/25/",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": my_key,
            "X-RapidAPI-Host": "adsbx-flight-sim-traffic.p.rapidapi.com"
        }
    };
    //AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.
    $.ajax(settings).done(function (response) {
      /**Ajax response is already a JavaScript JSON object, so no more parsing is required. */
      console.log(response);
        var min = 100000;
        var min_index= 0;
        for (let i = 0; i < response.total;i++){
          var lat2 = response.ac[i].lat;
          var long2 = response.ac[i].lon;
          if (response.ac[i].call == "") continue;
          var x = haversine(user_lat,user_long,lat2,long2)
          if (x < min){
            min = x;
            min_index = i;
          }
        }
        console.log(response.ac[min_index].call);
        callsign.textContent = "callsign: " +response.ac[min_index].call;
        type.textContent = "type: " + response.ac[min_index].type;


    });
}
//haversine formula for calculating the distance between two points using longitude and latitude.
function haversine(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = 
     0.5 - Math.cos(dLat)/2 + 
     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
     (1 - Math.cos(dLon))/2;

  return R * 2 * Math.asin(Math.sqrt(a));
}



//callback function to handle error when user's location cannot be fetch
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
  /**
   *Some website enforced CORS policy  
   kaquoc.github.io JS file ------------Some Request -------> some URL


   'no-access-control -allow-origin-header error'
   this means that our script attempts to make a request to a resource that isn't configured to accept requests coming from
   source with different (sub)domain. Thus violating Same-Origin policy.
   */

function fetchContent(URL){
  //disable CORS: a cross domain security at client side which verify that server allowed to fetch data from your domian.
  //Basically website server is verifying if your request comes from allowed domain list.
 //-------Some Resources---------
  //https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
  // https://linuxpip.org/fix-access-to-xmlhttprequest-has-been-blocked-by-cors-policy/
  //https://www.stackhawk.com/blog/fixing-no-access-control-allow-origin-header-present/
  fetch(URL,
    {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
    referrerPolicy: 'no-referrer',
    }
    ).then(response => {
    if(!response.ok){
      console.log("error response status " + response.status);
      console.log(response.text);
    }else{
      console.log(response.text());
    }
  })
}

//Using a reverse proxy server to solve CORS issues
function cross(){
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
        targetOrigin[1] !== cors_api_host) {
        args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
}