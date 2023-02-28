

var map = new OSMBuildings({
    container: 'map',
    // New York City
    position: { latitude: 40.71, longitude: -74.02 },
    // Austin
    // position: { latitude: 30.26, longitude: -97.73},
    zoom: 1,
    minZoom: 1,
    maxZoom: 4,
    tilt: 80,
    rotation:0,
    effects: ['shadows'],
    backgroundColor: '#fffff',
    attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> © Map <a href="https://mapbox.com/">Mapbox</a> © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
  });
  // options.backgroundColor('#efe8e0');
  //   map.addMarker(
  //   position = {latitude: 40.71, longitude: -74.02},
  //   altitude= 0,
  //   backgroundColor= '#baf9'
  // );
  
  map.addMapTiles('https://api.mapbox.com/styles/v1/osmbuildings/cjt9gq35s09051fo7urho3m0f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9laGFuY29jazk1IiwiYSI6ImNsZGY1ejkwdjBmbjczcW1wZ2V6bHZ6bmcifQ.bE4tjSuBIdr3wJjz6uDjpg');
  map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/dixw8kmb/tile/{z}/{x}/{y}.json');

  let rotation = 0;
  
  function rotate () {
    map.setRotation(rotation);
    rotation = (rotation+1) % 360;
    requestAnimationFrame(rotate);
  }