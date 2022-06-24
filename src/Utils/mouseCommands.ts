import robot from 'robotjs';

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

const moveMouseUp = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x, y - +distance);
}

const moveMouseDown = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x, y + +distance);
}

const moveMouseLeft = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x - +distance, y);
}

const moveMouseRight = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x + +distance, y);
}

