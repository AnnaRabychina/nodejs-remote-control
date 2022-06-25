import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';

export const drawCommands = (command: string, params: string[]) => {

    switch (command) {
        case 'draw_circle':
            drawCircle(params[0]);
            break;
        case 'draw_rectangle':
            drawRectangle(params[0], params[1]);
            break;
        case 'draw_square':
            drawRectangle(params[0], params[0]);
            break;
    }
}