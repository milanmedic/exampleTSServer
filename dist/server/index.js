"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var Response_1 = __importDefault(require("../models/Response"));
var server = http.createServer(function (req, res) {
    return handleAPIRequests(req, res);
});
function handleAPIRequests(req, res) {
    if (req.url) {
        if (checkIfAPIRequest(req.url)) {
            var route = extractReqResource(req.url);
            return routeURL(route, res);
        }
        return handleMissingRoute(res);
    }
    throw new Error("Request is missing it's url.");
}
;
function checkIfAPIRequest(url) {
    var apiPrefixOccurence = url.indexOf('/api');
    if (apiPrefixOccurence == -1) {
        return false;
    }
    return true;
}
function extractReqResource(url) {
    var apiPrefixOccurence = url.indexOf('/api');
    return url.slice(apiPrefixOccurence + 4);
}
function routeURL(requestURL, res) {
    switch (requestURL) {
        case '/helloworld':
            handleRoute(res, { message: "Hello TS Server" });
            return;
        default:
            return handleMissingRoute(res);
    }
}
;
function handleRoute(res, data) {
    var response = new Response_1.default(res);
    response.sendResponse(data);
}
function handleMissingRoute(res) {
    var response = new Response_1.default(res);
    response.setStatusCode(404);
    response.setStatusMessage("Not found.");
    response.sendResponse();
    return;
}
function StartServer() {
    var PORT = process.env.PORT || '8080';
    server.listen(PORT, function () {
        console.log("Server started listening on PORT: " + PORT);
    });
}
exports.default = StartServer;
;
//# sourceMappingURL=index.js.map