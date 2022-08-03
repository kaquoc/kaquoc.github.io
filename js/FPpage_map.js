let map;

function initMap() {
    //two require parameter for map, center and zoom
    console.log(global_user_lat + " " + global_user_long);
    const myLatLng = { lat: global_user_lat, lng: global_user_long };
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      console.log("map initiate successfully");
    var marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "user location"
    })
}

window.initMap = initMap;