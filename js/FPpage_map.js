let map;

function initMap() {
    //two require parameter for map, center and zoom
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      console.log("map initiate successfully");
    
}

window.initMap = initMap;