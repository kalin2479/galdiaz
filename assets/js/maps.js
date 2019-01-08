$( document ).ready(function() {
  setTimeout(function(){
    // alert(33)
    initMap();
    initMapSucursal();
  }, 1500);
})

function initMapSucursal(){
  var myLatLng = {lat: -12.054246, lng:  -77.027294};

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map2'), {
    center: myLatLng,
    zoom: 16
  });

  setMarkers(map,myLatLng);
}

function initMap() {
  var myLatLng = {lat: -12.053762, lng: -77.027782};

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16
  });

  setMarkers(map,myLatLng);
}

function setMarkers(map,myLatLng){


  var image = {
    url: 'assets/image/ping.png', //ruta de la imagen
    size: new google.maps.Size(40, 56), //tamaño de la imagen
    origin: new google.maps.Point(0,0), //origen de la iamgen
    //el ancla de la imagen, el punto donde esta marcando, en nuestro caso el centro inferior.
    anchor: new google.maps.Point(20, 60)
  };

  var marcador = new google.maps.Marker({
  	position: new google.maps.LatLng(myLatLng.lat,myLatLng.lng),
  	map: map,
  	title: "sdsf",
  	animation: google.maps.Animation.DROP,
  	identificador: 111,
  	draggable: true,
  	icon : image
	});
}
