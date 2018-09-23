import WebMap from "esri/WebMap";
import MapView from "esri/views/MapView";

// widgets
import Legend from "esri/widgets/Legend";

import StatsWidget from "./StatsWidget";

const webmap = new WebMap({
  portalItem: {
    id: "96cf806c32874026bef5f586315f098c"
  }
});

const view = new MapView({
  map: webmap,
  container: "viewDiv",
  constraints: {
    minScale: 300000
  },
  highlightOptions: {
    color: "black",
    haloOpacity: 0.65,
    fillOpacity: 0.45
  }
});

const legend = new Legend({ view });
const stats = new StatsWidget({ view });

view.ui.add(legend, "bottom-left");
view.ui.add(stats, "top-right");
