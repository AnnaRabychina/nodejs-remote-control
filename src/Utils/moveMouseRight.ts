import robot from 'robotjs';

export const moveMouseRight = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x + +distance, y);
}
