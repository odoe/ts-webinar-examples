import ArcGISMap from "esri/Map";

import React, { Component } from "react";

type Props = {
  map: ArcGISMap;
};

class WebMapComponent extends Component<Props> {

  mapDiv: HTMLDivElement | null;

  componentDidMount() {
    import("esri/views/MapView")
    .then(MapViewConstructor => {
      // Imported modules have a `default` object on them
      const view = new MapViewConstructor.default({
        map: this.props.map,
        container: this.mapDiv
      });
    });
  }

  render() {
    return (
      <div className="webmap"
        ref={
          element => this.mapDiv = element
        }>
      </div>
    );
  }
}