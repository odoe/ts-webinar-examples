define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function logGeometry(geometry) {
        if (geometry.type === "point") {
            // the compiler knows the geometry is a Point instance
            console.log("point coords: ");
        }
        // the compiler knows the geometry must be a `Polygon`
        else if ("rings" in geometry) {
            console.log("polygon");
        }
        else {
            // the compiler knows the geometry must be a `Extent | Multipoint | Polyline`
            console.log("The value is a geometry, but isn't a point or polygon.");
        }
    }
});
//# sourceMappingURL=type-guards.js.map