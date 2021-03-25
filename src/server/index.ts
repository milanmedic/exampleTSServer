import Server from '../models/Server';

export default function() {
    const server: Server = new Server();
    return server.startServer();
}
