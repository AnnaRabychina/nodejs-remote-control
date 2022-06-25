import { moveMouseUp } from './moveMouseUp';
import { moveMouseDown } from './moveMouseDown';
import { moveMouseLeft } from './moveMouseLeft';
import { moveMouseRight } from './moveMouseRight';

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