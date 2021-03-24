"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Response = /** @class */ (function () {
    function Response(response) {
        this.response = response;
        this.response.statusCode = 200;
        this.response.statusMessage = "OK";
        this.response.setHeader("Content-Type", "application/json");
    }
    Response.prototype.setStatusCode = function (code) {
        this.response.statusCode = code;
    };
    Response.prototype.setStatusMessage = function (message) {
        this.response.statusMessage = message;
    };
    Response.prototype.setContentType = function (type) {
        this.response.setHeader("Content-Type", type);
    };
    Response.prototype.sendResponse = function (data) {
        if (data === void 0) { data = undefined; }
        if (data) {
            this.response.write(JSON.stringify(data));
        }
        this.response.end();
        return;
    };
    return Response;
}());
exports.default = Response;
//# sourceMappingURL=Response.js.map