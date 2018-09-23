var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/geometry", "esri/tasks/Locator"], function (require, exports, geometry_1, Locator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Locator_1 = __importDefault(Locator_1);
    var geocoder = new Locator_1.default({
        url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
    });
    exports.findNearbyPlaces = function (_a) {
        var coords = _a.coords;
        var latitude = coords.latitude, longitude = coords.longitude;
        var point = new geometry_1.Point({ longitude: longitude, latitude: latitude });
        return geocoder
            .addressToLocations({
            location: point,
            distance: 50,
            categories: ["Coffee shop", "Gas station", "Food", "Hotel"],
            maxLocations: 20,
            outFields: ["Place_addr", "PlaceName", "Type"]
        });
    };
});
//# sourceMappingURL=places.js.map