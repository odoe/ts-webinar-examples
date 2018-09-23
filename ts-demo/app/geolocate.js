define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GEOLOCATON_SUPPORTED = "geolocation" in navigator;
    function deviceLocation() {
        if (!GEOLOCATON_SUPPORTED) {
            return Promise.reject("Geolocation not supported");
        }
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
    exports.deviceLocation = deviceLocation;
});
//# sourceMappingURL=geolocate.js.map