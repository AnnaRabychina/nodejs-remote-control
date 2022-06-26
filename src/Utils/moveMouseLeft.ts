import robot from 'robotjs';

export const moveMouseLeft = (distance: string): void => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x - +distance, y);
}