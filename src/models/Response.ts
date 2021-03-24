import { ServerResponse } from "node:http";

export default class Response {
    public response: ServerResponse;
    constructor(response: ServerResponse) {
        this.response = response;
        this.response.statusCode = 200;
        this.response.statusMessage = "OK";
        this.response.setHeader("Content-Type", "application/json");
    }
    public setStatusCode(code: number): void{
        this.response.statusCode = code;
    }
    public setStatusMessage(message: string): void{
        this.response.statusMessage = message;
    }
    public setContentType(type: string): void {
        this.response.setHeader("Content-Type", type);
    }
    public sendResponse(data: any = undefined): void {
        if(data){
            this.response.write(JSON.stringify(data));
        }
        this.response.end();
        return;
    }
}
