var map;

function initMap() {
  map = new google.maps.Map(document.getElementbyId('map'), {
    center: {lat: 42.283, lng: 87.953},
    zoom: 8,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "terrain"],
    }
  });

  var myLocation = new google.maps.LatLng(40.518, 74.412);
  new google.maps.Marker({
    position: myLocation,
    map,
    title: "I used to live here!",
  });
}

window.initMap = initMap;
