var jerseyMarker;
var vegasMarker;

function initMap() {
  var heatmapData = [
    new google.maps.LatLng(42.283, -87.943),
    new google.maps.LatLng(42.283, -87.945),
    new google.maps.LatLng(42.283, -87.947),
    new google.maps.LatLng(42.283, -87.949),
    new google.maps.LatLng(42.283, -87.951),
    new google.maps.LatLng(42.283, -87.955),
    new google.maps.LatLng(42.283, -87.957),
    new google.maps.LatLng(42.283, -87.969),
    new google.maps.LatLng(42.283, -87.972),
    new google.maps.LatLng(42.280, -87.943),
    new google.maps.LatLng(42.280, -87.945),
    new google.maps.LatLng(42.280, -87.947),
    new google.maps.LatLng(42.280, -87.949),
    new google.maps.LatLng(42.280, -87.951),
    new google.maps.LatLng(42.280, -87.955),
    new google.maps.LatLng(42.280, -87.957),
    new google.maps.LatLng(42.280, -88.969),
    new google.maps.LatLng(42.280, -88.982),
    new google.maps.LatLng(42.283, -88.983),
    new google.maps.LatLng(42.283, -88.985),
    new google.maps.LatLng(42.283, -88.947),
    new google.maps.LatLng(42.283, -88.949),
    new google.maps.LatLng(44.283, -88.951),
    new google.maps.LatLng(44.283, -88.955),
    new google.maps.LatLng(44.283, -88.957),
    new google.maps.LatLng(44.283, -86.969),
    new google.maps.LatLng(44.283, -86.972),
    new google.maps.LatLng(44.280, -86.943),
    new google.maps.LatLng(44.280, -86.945),
    new google.maps.LatLng(44.280, -86.947),
    new google.maps.LatLng(44.280, -86.949),
    new google.maps.LatLng(44.280, -86.951),
    new google.maps.LatLng(44.280, -86.955),
    new google.maps.LatLng(44.280, -86.957),
    new google.maps.LatLng(44.280, -86.969),
    new google.maps.LatLng(44.280, -86.972),
  ];
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.283, lng: -87.953},
    zoom: 4,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["satellite", "roadmap", "terrain"],
    },
  });

  var myLocation = new google.maps.LatLng(40.518, -74.412);
  jerseyMarker = new google.maps.Marker({
    map,
    title: "I used to live here!",
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon: "images/jersey.png",
    position: myLocation,
  });
  jerseyMarker.addListener("click", toggleBounce1);

  var myLocation2 = new google.maps.LatLng(36.172, -115.139);
  vegasMarker = new google.maps.Marker({
    map,
    title: "One of the best places I've been to!",
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon: "images/vegas.png",
    position: myLocation2,
  });
  vegasMarker.addListener("click", toggleBounce2);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);
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
