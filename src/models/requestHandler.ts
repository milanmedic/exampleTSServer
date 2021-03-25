import { IncomingMessage, ServerResponse } from 'node:http';
import Response from '../models/Response';

export default class RequestHandler {
    constructor(){}
    public handleAPIRequests(req: IncomingMessage, res: ServerResponse): void {
        if(req.url){
            if(this.checkIfAPIRequest(req.url)) {
                const route = this.extractReqResource(req.url);
                return this.routeURL(route, res);
            }
            return this.handleMissingRoute(res);
        }
        throw new Error("Request is missing it's url.");
    };
    
    private checkIfAPIRequest(url: string): boolean {
        const apiPrefixOccurence = url.indexOf('/api');
        if(apiPrefixOccurence == -1) {
            return false;
        }
        return true;
    }
    
    private extractReqResource(url: string): string {
        const apiPrefixOccurence = url.indexOf('/api');
        return url.slice(apiPrefixOccurence+4);
    }
    
    private routeURL(requestURL: string, res: ServerResponse): void {
        switch(requestURL) {
            case '/helloworld':
                this.handleRoute(res, {message: "Hello TS Server"});
                return;
            default:
                return this.handleMissingRoute(res);
        }
    };
    
    private handleRoute(res: ServerResponse, data: object | any): void {
        const response: Response = new Response(res);     
        response.sendResponse(data);
    }
    
    private handleMissingRoute(res: ServerResponse): void {
        const response: Response = new Response(res);
        response.setStatusCode(404);
        response.setStatusMessage("Not found.");
        response.sendResponse();
        return;
    }
}