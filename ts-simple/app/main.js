var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Map", "esri/layers/FeatureLayer", "esri/views/MapView", "esri/widgets/Search"], function (require, exports, Map_1, FeatureLayer_1, MapView_1, Search_1) {
    "use strict";
    Map_1 = __importDefault(Map_1);
    FeatureLayer_1 = __importDefault(FeatureLayer_1);
    MapView_1 = __importDefault(MapView_1);
    Search_1 = __importDefault(Search_1);
    var layer = new FeatureLayer_1.default({
        portalItem: {
            id: "eed7f427d93440d19c3a494201471d34"
        }
    });
    var map = new Map_1.default({
        basemap: "streets-vector",
        layers: [layer]
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
    var search = new Search_1.default({ view: view });
    view.ui.add(search, "top-right");
    return view;
});
//# sourceMappingURL=main.js.map