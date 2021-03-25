"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var requestHandler_1 = __importDefault(require("./requestHandler"));
var CustomServer = /** @class */ (function () {
    function CustomServer() {
        var _this = this;
        this.requestHandler = new requestHandler_1.default();
        this.server = http_1.default.createServer(function (req, res) {
            _this.requestHandler.handleAPIRequests(req, res);
        });
    }
    CustomServer.prototype.startServer = function () {
        var PORT = process.env.PORT || '8080';
        this.server.listen(PORT, function () {
            console.log("Server started listening on PORT: " + PORT);
        });
    };
    return CustomServer;
}());
exports.default = CustomServer;
//# sourceMappingURL=Server.js.map