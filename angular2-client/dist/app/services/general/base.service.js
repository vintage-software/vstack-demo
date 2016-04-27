"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vstack_graph_1 = require('vstack-graph');
var BaseService = (function (_super) {
    __extends(BaseService, _super);
    function BaseService(urlPart, http) {
        _super.call(this, new vstack_graph_1.AngularHttpMapper({ baseUrl: "https://vintageokrapi.azurewebsites.net/" + urlPart, http: http }));
    }
    return BaseService;
}(vstack_graph_1.VSCollectionService));
exports.BaseService = BaseService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9nZW5lcmFsL2Jhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSw2QkFBcUUsY0FBYyxDQUFDLENBQUE7QUFFcEY7SUFBMkQsK0JBQXNCO0lBQy9FLHFCQUFZLE9BQWUsRUFBRSxJQUFVO1FBQ3JDLGtCQUFNLElBQUksZ0NBQWlCLENBQUMsRUFBRSxPQUFPLEVBQUUsNkNBQTJDLE9BQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFDSCxrQkFBQztBQUFELENBSkEsQUFJQyxDQUowRCxrQ0FBbUIsR0FJN0U7QUFKWSxtQkFBVyxjQUl2QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9nZW5lcmFsL2Jhc2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5pbXBvcnQge1ZTQ29sbGVjdGlvblNlcnZpY2UsIENvbGxlY3Rpb25JdGVtLCBBbmd1bGFySHR0cE1hcHBlcn0gZnJvbSAndnN0YWNrLWdyYXBoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZTxUIGV4dGVuZHMgQ29sbGVjdGlvbkl0ZW0+IGV4dGVuZHMgVlNDb2xsZWN0aW9uU2VydmljZTxUPiB7XHJcbiAgY29uc3RydWN0b3IodXJsUGFydDogc3RyaW5nLCBodHRwOiBIdHRwKSB7XHJcbiAgICBzdXBlcihuZXcgQW5ndWxhckh0dHBNYXBwZXIoeyBiYXNlVXJsOiBgaHR0cHM6Ly92aW50YWdlb2tyYXBpLmF6dXJld2Vic2l0ZXMubmV0LyR7dXJsUGFydH1gLCBodHRwOiBodHRwIH0pKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
