import http from 'http';
import { IncomingMessage, Server, ServerResponse } from 'node:http';
import RequestHandler from './requestHandler';

export default class CustomServer {
    private server: Server;
    private requestHandler: RequestHandler = new RequestHandler();
    constructor() {
        this.server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
            this.requestHandler.handleAPIRequests(req, res);
        });
    }

    public startServer(): void {
        const PORT:string = process.env.PORT || '8080';
        this.server.listen(PORT, () => {
            console.log(`Server started listening on PORT: ${PORT}`);
        });
    }
}