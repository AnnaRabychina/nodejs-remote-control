import { httpServer } from './src/http_server/index.js';
import robot from 'robotjs';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { mouseCommands } from './src/utils/mouseCommands.js';
import { drawCommands } from './src/utils/drawCommands.js';
import { printScreen } from './src/utils/print.js'

const HTTP_PORT = 3000;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wsServer = new WebSocketServer({
    port: WS_PORT,
});

console.log(`WS server is running on the ${WS_PORT} port!`);

wsServer.on('connection', (ws) => {
    console.log('Connection accepted!');
    const wsStream = createWebSocketStream(ws, {encoding: 'utf8', decodeStrings: false});
    wsStream.on('data', data => {
        const command = data.toString().split(' ')[0];
        const params = data.toString().split(' ').slice(1);
        if (command.startsWith('mouse_')) {
            if (command === 'mouse_position'){
                const { x, y } = robot.getMousePos();
                const message = `${command} ${x},${y}`;
                wsStream.write(message, 'utf8');
            } else {
                mouseCommands(command, params);
                wsStream.write(command, 'utf8');
            }
        } else if (command.startsWith('draw_')) {
            wsStream.write(command, 'utf8');
            drawCommands(command, params);
        } else if (command.startsWith('prnt_')) {
            printScreen(wsStream);
        }
    });

    wsStream.on('end', () => {
        console.log('Client disconnected');
    });

    wsStream.on('close', () => {
        wsStream.end();
    });

});

process.on('SIGINT', () => {
    process.stdout.write('Closing websocket...\n');
    wsServer.close();
    process.exit(0);
});