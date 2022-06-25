import robot from 'robotjs';

export const moveMouseDown = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x, y + +distance);
}