import robot from 'robotjs';

export const drawCircle = (radius: string): void => {
    const { x, y } = robot.getMousePos();
    for (let i = 0; i <= Math.PI * 2; i += 0.02) {
        robot.dragMouse(x + +radius * Math.cos(i) - +radius, y + +radius * Math.sin(i));
        robot.mouseToggle('down', 'left');
    }
    robot.mouseToggle('up');
}