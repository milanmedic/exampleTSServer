"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = __importDefault(require("../models/Server"));
function default_1() {
    var server = new Server_1.default();
    return server.startServer();
}
exports.default = default_1;
//# sourceMappingURL=index.js.map