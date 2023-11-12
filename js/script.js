function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.283, lng: 87.953},
    zoom: 8,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "terrain"],
    }
  });

  var myLocation = new google.maps.LatLng(40.518, 74.412);
  var jerseyMarker = new google.maps.Marker({
    position: myLocation,
    map,
    title: "I used to live here!",
    animation: google.maps.Animation.DROP,
    icon: "images/jersey.png"
  });
  jerseyMarker.addListener("click", toggleBounce1);

  var myLocation2 = new google.maps.LatLng(36.172, 115.139);
  var vegasMarker = new google.maps.Marker({
    position: myLocation2,
    map,
    title: "One of the best places I've been to!",
    animation: google.maps.Animation.DROP,
    icon: "images/vegas.png"
  });
  vegasMarker.addListener("click", toggleBounce2);
}

function toggleBounce1() {
  if (jerseyMarker.getAnimation() !== null) {
    jerseyMarker.setAnimation(null);
  } else {
    jerseyMarker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function toggleBounce2() {
  if (vegasMarker.getAnimation() !== null) {
    vegasMarker.setAnimation(null);
  } else {
    vegasMarker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

window.initMap = initMap;
