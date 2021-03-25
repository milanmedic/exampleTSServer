"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Response_1 = __importDefault(require("../models/Response"));
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
    }
    RequestHandler.prototype.handleAPIRequests = function (req, res) {
        if (req.url) {
            if (this.checkIfAPIRequest(req.url)) {
                var route = this.extractReqResource(req.url);
                return this.routeURL(route, res);
            }
            return this.handleMissingRoute(res);
        }
        throw new Error("Request is missing it's url.");
    };
    ;
    RequestHandler.prototype.checkIfAPIRequest = function (url) {
        var apiPrefixOccurence = url.indexOf('/api');
        if (apiPrefixOccurence == -1) {
            return false;
        }
        return true;
    };
    RequestHandler.prototype.extractReqResource = function (url) {
        var apiPrefixOccurence = url.indexOf('/api');
        return url.slice(apiPrefixOccurence + 4);
    };
    RequestHandler.prototype.routeURL = function (requestURL, res) {
        switch (requestURL) {
            case '/helloworld':
                this.handleRoute(res, { message: "Hello TS Server" });
                return;
            default:
                return this.handleMissingRoute(res);
        }
    };
    ;
    RequestHandler.prototype.handleRoute = function (res, data) {
        var response = new Response_1.default(res);
        response.sendResponse(data);
    };
    RequestHandler.prototype.handleMissingRoute = function (res) {
        var response = new Response_1.default(res);
        response.setStatusCode(404);
        response.setStatusMessage("Not found.");
        response.sendResponse();
        return;
    };
    return RequestHandler;
}());
exports.default = RequestHandler;
//# sourceMappingURL=requestHandler.js.map