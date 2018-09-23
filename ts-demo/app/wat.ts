import { Geometry } from "esri/geometry";

function logGeometry(geometry: Geometry): void {
  if (geometry.type === "point") {
    // the compiler knows the geometry is a Point instance
    console.log("point coords: ", geometry.latitude, geometry.longitude);
  }
  else {
    // the compiler knows the geometry must be a `Extent | Polygon | Multipoint | Polyline`
    console.log("The value is a geometry, but isn't a point.")
  }
}