import * as http from 'http';
import { IncomingMessage, Server, ServerResponse } from 'node:http';
import Response from '../models/Response';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    return handleAPIRequests(req, res);
});

function handleAPIRequests(req: IncomingMessage, res: ServerResponse): void {
    if(req.url){
        if(checkIfAPIRequest(req.url)) {
            const route = extractReqResource(req.url);
            return routeURL(route, res);
        }
        return handleMissingRoute(res);
    }
    throw new Error("Request is missing it's url.");
};

function checkIfAPIRequest(url: string): boolean {
    const apiPrefixOccurence = url.indexOf('/api');
    if(apiPrefixOccurence == -1) {
        return false;
    }
    return true;
}

function extractReqResource(url: string): string {
    const apiPrefixOccurence = url.indexOf('/api');
    return url.slice(apiPrefixOccurence+4);
}

function routeURL(requestURL: string, res: ServerResponse): void {
    switch(requestURL) {
        case '/helloworld':
            handleRoute(res, {message: "Hello TS Server"});
            return;
        default:
            return handleMissingRoute(res);
    }
};

function handleRoute(res: ServerResponse, data: object | any): void {
    const response: Response = new Response(res);     
    response.sendResponse(data);
}

function handleMissingRoute(res: ServerResponse): void {
    const response: Response = new Response(res);
    response.setStatusCode(404);
    response.setStatusMessage("Not found.");
    response.sendResponse();
    return;
}

export default function StartServer(): void {
    const PORT:string = process.env.PORT || '8080';
    server.listen(PORT, () => {
        console.log(`Server started listening on PORT: ${PORT}`);
    });
};