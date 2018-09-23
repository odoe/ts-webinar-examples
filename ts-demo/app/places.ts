import { Point } from "esri/geometry";
import Locator from "esri/tasks/Locator";

export interface SimplePoint {
  latitude: number;
  longitude: number;
}

const geocoder = new Locator({
  url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
});

export const findNearbyPlaces = ({ coords }: Position) => {
  const { latitude, longitude } = coords;
  const point = new Point({ longitude, latitude });
  return geocoder
  .addressToLocations(<any>{
    location: point,
    distance: 50,
    categories: ["Coffee shop", "Gas station", "Food", "Hotel"],
    maxLocations: 20,
    outFields: ["Place_addr", "PlaceName", "Type"]
  })
}
