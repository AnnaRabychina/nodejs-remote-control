import { moveMouseUp } from './moveMouseUp.js';
import { moveMouseDown } from './moveMouseDown.js';
import { moveMouseLeft } from './moveMouseLeft.js';
import { moveMouseRight } from './moveMouseRight.js';

export const mouseCommands = (command: string, params: string[]) => {

    switch (command) {
        case 'mouse_up':
            moveMouseUp(params[0]);
            break;
        case 'mouse_down':
            moveMouseDown(params[0]);
            break;
        case 'mouse_left':
            moveMouseLeft(params[0]);
            break;
        case 'mouse_right':
            moveMouseRight(params[0]);
            break;
     }
}