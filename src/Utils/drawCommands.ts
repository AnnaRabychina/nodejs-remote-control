import robot from 'robotjs';

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

const drawCircle = (radius: string): void => {
    const { x, y } = robot.getMousePos();
    for (let i = 0; i <= Math.PI * 2; i += 0.02) {
        robot.dragMouse(x + +radius * Math.cos(i) - +radius, y + +radius * Math.sin(i));
        robot.mouseToggle('down', 'left');
    }
    robot.mouseToggle('up');
}

const drawRectangle = (width: string, length: string): void => {
    const { x, y } = robot.getMousePos();
    robot.mouseToggle('down', 'left');
    robot.moveMouseSmooth(x + +width, y);
    robot.moveMouseSmooth(x + +width, y + +length);
    robot.moveMouseSmooth(x, y + +length);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
}