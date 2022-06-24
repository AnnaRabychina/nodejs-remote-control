import Jimp from 'jimp';
import { httpServer } from './src/http_server/index.js';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { mouseCommands } from './src/Utils/mouseCommands.js';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port:8080,
});

wss.on('connection', (ws) => {
    ws.on('message', data => {
        const command = data.toString().split(' ')[0];
        const params = data.toString().split(' ').slice(1);
        if (command.startsWith('mouse_')) {
            if (command === 'mouse_position'){
                const { x, y } = robot.getMousePos();
                ws.send(`mouse_position ${x},${y}`);
            } else {
                mouseCommands(command, params);
                ws.send(command);
            }
        }
    });
})
