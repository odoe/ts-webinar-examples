import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";

import FeatureLayerView from "esri/views/layers/FeatureLayerView";

// Types
type SearchItem = {
  query: Query,
  id: number
};

type FeatureItem = {
  query: Query,
  id: number,
  layerView: FeatureLayerView
};

// interface

function runAllQueries(items: SearchItem[]) {
  const ids: number[] = [];
  const tasks = items.map(item => {
    ids.push(item.id);
    return new QueryTask(item.query);
  });
  return {
    ids, tasks
  };
}

function runAllClientQueries(items: FeatureItem[]) {
  const ids: number[] = [];
  const tasks = items.map(item => {
    return item.layerView.queryFeatures(item.query);
  });
  return {
    ids, tasks
  };
}