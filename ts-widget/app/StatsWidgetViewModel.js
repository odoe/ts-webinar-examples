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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
define(["require", "exports", "esri/core/Accessor", "esri/tasks/support/StatisticDefinition", "esri/core/watchUtils", "esri/core/accessorSupport/decorators"], function (require, exports, Accessor_1, StatisticDefinition_1, watchUtils_1, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Accessor_1 = __importDefault(Accessor_1);
    StatisticDefinition_1 = __importDefault(StatisticDefinition_1);
    var statDefinitions = [
        new StatisticDefinition_1.default({
            onStatisticField: "1",
            outStatisticFieldName: "total",
            statisticType: "count"
        })
    ];
    var StatsWidgetViewModel = /** @class */ (function (_super) {
        __extends(StatsWidgetViewModel, _super);
        function StatsWidgetViewModel(params) {
            var _this = _super.call(this, params) || this;
            _this.total = 0;
            _this.initView = _this.initView.bind(_this);
            _this.queryStats = _this.queryStats.bind(_this);
            watchUtils_1.whenOnce(_this, "view", _this.initView);
            return _this;
        }
        StatsWidgetViewModel.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_1, layer, layerView, error_2;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.view.when()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.warn(error_1);
                            return [3 /*break*/, 3];
                        case 3:
                            layer = this.view.map.layers.getItemAt(0);
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, this.view.whenLayerView(layer)];
                        case 5:
                            layerView = (_a.sent());
                            return [3 /*break*/, 7];
                        case 6:
                            error_2 = _a.sent();
                            console.warn(error_2);
                            return [3 /*break*/, 7];
                        case 7:
                            watchUtils_1.whenFalseOnce(layerView, "updating", function () {
                                _this.view.on(["click", "drag"], function (event) {
                                    event.stopPropagation();
                                    _this.queryStats(layerView, event);
                                });
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        StatsWidgetViewModel.prototype.queryStats = function (layerView, event) {
            return __awaiter(this, void 0, void 0, function () {
                var query, response, stats, ids;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = layerView.layer.createQuery();
                            query.geometry = this.view.toMap(event);
                            query.distance = 1;
                            query.units = "miles";
                            query.outStatistics = statDefinitions;
                            return [4 /*yield*/, layerView.queryFeatures(query)];
                        case 1:
                            response = _a.sent();
                            stats = response.features[0].attributes;
                            this.total = stats.total;
                            return [4 /*yield*/, layerView.queryObjectIds(query)];
                        case 2:
                            ids = _a.sent();
                            if (this.highlightHandle) {
                                this.highlightHandle.remove();
                                this.highlightHandle = null;
                            }
                            this.highlightHandle = layerView.highlight(ids);
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            decorators_1.property()
        ], StatsWidgetViewModel.prototype, "view", void 0);
        __decorate([
            decorators_1.property()
        ], StatsWidgetViewModel.prototype, "total", void 0);
        StatsWidgetViewModel = __decorate([
            decorators_1.subclass("app.StatsWidgetViewModel")
        ], StatsWidgetViewModel);
        return StatsWidgetViewModel;
    }(decorators_1.declared(Accessor_1.default)));
    exports.default = StatsWidgetViewModel;
});
//# sourceMappingURL=StatsWidgetViewModel.js.map