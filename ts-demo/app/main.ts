import Graphic from "esri/Graphic";
import ArcGISMap from "esri/Map";
import { Point } from "esri/geometry";
import MapView from "esri/views/MapView";

// widgets
import Search from "esri/widgets/Search";

import esri = __esri;

function  addresToFeatures(items: esri.AddressCandidate[]) {
  return items.map(item => {
    return new Graphic({
      attributes: item.attributes,
      geometry: new Point({
        x: item.location.x,
        y: item.location.y
      }),
      popupTemplate: {
        title: "{PlaceName}",
        content: "{Place_addr}"
      },
      symbol: {
        type: "simple-marker",
        outline: {
            color: [255, 255, 255, 1]
        },
        color: [0, 169, 230, 1]
      }
    });
  });
};

async function findPlaces(view: MapView) {
  // dynamically import some helper modules
  const geo = await import("./geolocate");
  const places = await import("./places");

  // use helper modules
  const position = await geo.deviceLocation();
  const addresses = await places.findNearbyPlaces(position);

  // finish my operation
  const features = addresToFeatures(addresses);
  view.graphics.removeAll();
  view.graphics.addMany(features);
  view.goTo(view.graphics);
}

const map = new ArcGISMap({
  basemap: "dark-gray-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

const search = new Search({ view });

view.ui.add(search, "top-right");

view.when().then(() => {
  findPlaces(view);
});
