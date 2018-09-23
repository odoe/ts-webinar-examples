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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/Widget", "./StatsWidgetViewModel"], function (require, exports, decorators_1, widget_1, Widget_1, StatsWidgetViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Widget_1 = __importDefault(Widget_1);
    StatsWidgetViewModel_1 = __importDefault(StatsWidgetViewModel_1);
    var CSS = {
        root: "esri-widget query-widget",
        label: "query-widget-label"
    };
    var StatsWidget = /** @class */ (function (_super) {
        __extends(StatsWidget, _super);
        function StatsWidget(params) {
            var _this = _super.call(this, params) || this;
            _this.viewModel = new StatsWidgetViewModel_1.default();
            return _this;
        }
        StatsWidget.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.root },
                widget_1.tsx("span", null, "Total Homicides in Selected Area"),
                widget_1.tsx("hr", null),
                widget_1.tsx("label", { class: CSS.label }, this.total)));
        };
        __decorate([
            decorators_1.property()
        ], StatsWidget.prototype, "viewModel", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.view")
        ], StatsWidget.prototype, "view", void 0);
        __decorate([
            decorators_1.aliasOf("viewModel.total"),
            widget_1.renderable()
        ], StatsWidget.prototype, "total", void 0);
        StatsWidget = __decorate([
            decorators_1.subclass("app.StatsWidget")
        ], StatsWidget);
        return StatsWidget;
    }(decorators_1.declared(Widget_1.default)));
    exports.default = StatsWidget;
});
//# sourceMappingURL=StatsWidget.js.map