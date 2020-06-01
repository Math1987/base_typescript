"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_1 = require("./socket");
const PORT = 7070;
const app = express_1.default();
app.set("port", PORT);
const http = require("http").Server(app);
socket_1.SocketHandler.init(http);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.get('/', function (req, res) {
    res.send('typescript base with express and socket.io');
});
const server = http.listen(PORT, function () {
    console.log("listening on : http://localhost:" + PORT);
});
