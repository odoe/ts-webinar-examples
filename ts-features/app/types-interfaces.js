var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/tasks/QueryTask"], function (require, exports, QueryTask_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    QueryTask_1 = __importDefault(QueryTask_1);
    function runAllQueries(items) {
        var ids = [];
        var tasks = items.map(function (item) {
            ids.push(item.id);
            return new QueryTask_1.default(item.query);
        });
        return {
            ids: ids, tasks: tasks
        };
    }
    function runAllClientQueries(items) {
        var ids = [];
        var tasks = items.map(function (item) {
            return item.layerView.queryFeatures(item.query);
        });
        return {
            ids: ids, tasks: tasks
        };
    }
});
//# sourceMappingURL=types-interfaces.js.map