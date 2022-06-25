import robot from 'robotjs';

export const drawRectangle = (width: string, length: string): void => {
    const { x, y } = robot.getMousePos();
    robot.mouseToggle('down', 'left');
    robot.moveMouseSmooth(x + +width, y);
    robot.moveMouseSmooth(x + +width, y + +length);
    robot.moveMouseSmooth(x, y + +length);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
}