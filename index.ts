import { httpServer } from './src/http_server/index.js';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { mouseCommands } from './src/utils/mouseCommands.js';
import { drawCommands } from './src/utils/drawCommands.js';
import { printScreen } from './src/utils/print.js'

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
        } else if (command.startsWith('draw_')) {
            ws.send(command);
            drawCommands(command, params);
        } else if (command.startsWith('prnt_')) {
            printScreen(ws);
        }
    });
})
