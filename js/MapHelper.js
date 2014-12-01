
function getColor(d) {
  return d > 1000 ? '#800026' :
  d > 500 ? '#BD0026' :
  d > 200 ? '#E31A1C' :
  d > 100 ? '#FC4E2A' :
  d > 50 ? '#FD8D3C' :
  d > 20 ? '#FEB24C' :
  d > 10 ? '#FED976' :
  '#CCCCCC'; 
}

function getFixedColor(feature) {
  if (BBVAService.getRankingZipcodes_offline_index(feature.properties.POSTALCODE)){
    return getColor(getRandomArbitrary(10, 1000));
  }
  return getColor(1);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


