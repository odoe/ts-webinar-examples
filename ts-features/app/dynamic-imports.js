var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importStar(react_1);
    var WebMapComponent = /** @class */ (function (_super) {
        __extends(WebMapComponent, _super);
        function WebMapComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WebMapComponent.prototype.componentDidMount = function () {
            var _this = this;
            new Promise(function (resolve_1, reject_1) { require(["esri/views/MapView"], resolve_1, reject_1); }).then(__importStar).then(function (MapViewConstructor) {
                // Imported modules have a `default` object on them
                var view = new MapViewConstructor.default({
                    map: _this.props.map,
                    container: _this.mapDiv
                });
            });
        };
        WebMapComponent.prototype.render = function () {
            var _this = this;
            return (react_1.default.createElement("div", { className: "webmap", ref: function (element) { return _this.mapDiv = element; } }));
        };
        return WebMapComponent;
    }(react_1.Component));
});
//# sourceMappingURL=dynamic-imports.js.map