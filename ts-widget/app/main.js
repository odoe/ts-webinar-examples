var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/WebMap", "esri/views/MapView", "esri/widgets/Legend", "./StatsWidget"], function (require, exports, WebMap_1, MapView_1, Legend_1, StatsWidget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WebMap_1 = __importDefault(WebMap_1);
    MapView_1 = __importDefault(MapView_1);
    Legend_1 = __importDefault(Legend_1);
    StatsWidget_1 = __importDefault(StatsWidget_1);
    var webmap = new WebMap_1.default({
        portalItem: {
            id: "96cf806c32874026bef5f586315f098c"
        }
    });
    var view = new MapView_1.default({
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
    var legend = new Legend_1.default({ view: view });
    var stats = new StatsWidget_1.default({ view: view });
    view.ui.add(legend, "bottom-left");
    view.ui.add(stats, "top-right");
});
//# sourceMappingURL=main.js.map