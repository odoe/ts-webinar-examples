var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Graphic", "esri/Map", "esri/geometry", "esri/views/MapView", "esri/widgets/Search", "./geolocate", "./places"], function (require, exports, Graphic_1, Map_1, geometry_1, MapView_1, Search_1, geolocate_1, places_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Graphic_1 = __importDefault(Graphic_1);
    Map_1 = __importDefault(Map_1);
    MapView_1 = __importDefault(MapView_1);
    Search_1 = __importDefault(Search_1);
    function addresToFeatures(items) {
        return items.map(function (item) {
            return new Graphic_1.default({
                attributes: item.attributes,
                geometry: new geometry_1.Point({
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
    }
    ;
    function findPlaces(view) {
        return __awaiter(this, void 0, void 0, function () {
            var position, places, features;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, geolocate_1.deviceLocation()];
                    case 1:
                        position = _a.sent();
                        return [4 /*yield*/, places_1.findNearbyPlaces(position)];
                    case 2:
                        places = _a.sent();
                        features = addresToFeatures(places);
                        view.graphics.removeAll();
                        view.graphics.addMany(features);
                        view.goTo(view.graphics);
                        return [2 /*return*/];
                }
            });
        });
    }
    var map = new Map_1.default({
        basemap: "dark-gray-vector"
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
    var search = new Search_1.default({ view: view });
    view.ui.add(search, "top-right");
    view.when().then(function () {
        findPlaces(view);
    });
});
//# sourceMappingURL=main.js.map