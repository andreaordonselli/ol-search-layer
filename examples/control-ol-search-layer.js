// Define vector layer with GeoJSON
const vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: '#319FD3',
      width: 1
    })
  })
});

// Create map with OSM + vector layer
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});

// Initialize your updated SearchLayer class (from previous answer)
const searchControl = new SearchLayer({
  layer: vectorLayer,
  colName: 'name',  // this should match a property in the GeoJSON
  zoom: 4,
  collapsed: true,
  map: map,
  maxResults: 50 // optional - if not set show 10 result
});

// Add control to map
map.addControl(searchControl);
