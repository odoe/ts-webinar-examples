import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";

import StatsWidgetViewModel, { StatsWidgetParams } from "./StatsWidgetViewModel";

import esri = __esri;

const CSS = {
  root: "esri-widget query-widget",
  label: "query-widget-label"
};

@subclass("app.StatsWidget")
class StatsWidget extends declared(Widget) {

  @property()
  viewModel = new StatsWidgetViewModel();

  @aliasOf("viewModel.view")
  view: esri.MapView;

  @aliasOf("viewModel.total")
  @renderable()
  total: number;

  constructor(params: StatsWidgetParams) {
    super(params);
  }

  render() {
    return (
      <div class={CSS.root}>
        <span>Total Homicides in Selected Area</span>
        <hr />
        <label class={CSS.label}>{ this.total }</label>
      </div>
    );
  }
}

export default StatsWidget;
