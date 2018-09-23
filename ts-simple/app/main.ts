import ArcGISMap from "esri/Map";
import FeatureLayer from "esri/layers/FeatureLayer";
import MapView from "esri/views/MapView";

// widgets
import Search from "esri/widgets/Search";

// const layer = new FeatureLayer({
//   portalItem: {
//     id: "eed7f427d93440d19c3a494201471d34"
//   }
// });

const layer = new FeatureLayer({
  portalItem: {
    id: "eed7f427d93440d19c3a494201471d34"
  }
});

const map = new ArcGISMap({
  basemap: "streets-vector",
  layers: [layer]
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

const search = new Search({ view });

view.ui.add(search, "top-right");
