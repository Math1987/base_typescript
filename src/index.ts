import express, {NextFunction, Request, Response} from 'express';
import {SocketHandler} from "./socket";
const PORT = 7070 ;

const app = express();
app.set("port", PORT);
const http = require("http").Server(app);

SocketHandler.init(http);

app.use(function (req: Request, res : Response, next : NextFunction) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    next();

});


app.get('/', function (req: Request, res : Response) {
    res.send('typescript base with express and socket.io');
});




const server = http.listen(PORT, function () {
    console.log("listening on : http://localhost:" + PORT);
});


