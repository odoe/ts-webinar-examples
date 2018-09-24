import esri = __esri;

import Accessor from "esri/core/Accessor";
import MapView from "esri/views/MapView";
import StatisticDefinition from "esri/tasks/support/StatisticDefinition";

import { whenOnce, whenFalseOnce } from "esri/core/watchUtils";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

export interface StatsWidgetParams extends esri.WidgetProperties {
  view: esri.MapView;
}

const statDefinitions = [
  new StatisticDefinition({
    onStatisticField: "1",
    outStatisticFieldName: "total",
    statisticType: "count"
  })
];

@subclass("app.StatsWidgetViewModel")
class StatsWidgetViewModel extends declared(Accessor) {

  @property()
  view: MapView;

  @property()
  total = 0;

  highlightHandle: any;


  constructor(params?: StatsWidgetParams) {
    super(params);

    this.initView = this.initView.bind(this);
    this.queryStats = this.queryStats.bind(this);

    whenOnce(this, "view", this.initView);
  }

  async initView() {
    try {
      await this.view.when().then();
    }
    catch(error) {
      console.warn(error);
    }

    const layer = this.view.map.layers.getItemAt(0);

    let layerView: esri.FeatureLayerView;
    try {
      layerView = await this.view.whenLayerView(layer) as esri.FeatureLayerView;
    }
    catch(error) {
      console.warn(error);
    }
    
    whenFalseOnce(layerView, "updating", () => {
     this.view.on(["click", "drag"], (event: MouseEvent) => {
        event.stopPropagation();
        this.queryStats(layerView, event);
      });
    });
  }

  async queryStats(layerView: esri.FeatureLayerView, event: MouseEvent) {
    const query = layerView.layer.createQuery();
    query.geometry = this.view.toMap(event);
    query.distance = 1;
    query.units = "miles";
    query.outStatistics = statDefinitions;

    const response = await layerView.queryFeatures(query);
    const stats = response.features[0].attributes;
    this.total = stats.total;

    const ids = await layerView.queryObjectIds(query);
    if (this.highlightHandle) {
      this.highlightHandle.remove();
      this.highlightHandle = null;
    }
    this.highlightHandle = layerView.highlight(ids);
  }

}

export default StatsWidgetViewModel;