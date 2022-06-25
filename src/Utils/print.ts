import robot from 'robotjs';
import Jimp from 'jimp';
import { WebSocket } from 'ws'

const sizeX = 200;
const sizeY = 200;

export const printScreen = (ws: WebSocket) => {
    const { x, y } = robot.getMousePos();
    const screen = robot.screen.capture(x - sizeX/2, y-sizeY/2, sizeX, sizeY).image;
  
    new Jimp({data: screen, width: sizeX, height: sizeY}, (err: Error, image) => {
      let pos = 0;

      image.scan(0, 0, sizeX, sizeY, (x: number, y: number, idx: number) => {
        image.bitmap.data[idx + 2] = screen.readUInt8(pos++);
        image.bitmap.data[idx + 1] = screen.readUInt8(pos++);
        image.bitmap.data[idx + 0] = screen.readUInt8(pos++);
        image.bitmap.data[idx + 3] = screen.readUInt8(pos++);
      });

      image.getBuffer(Jimp.MIME_PNG, (err: Error, buffer: string) => {
        const data = Buffer.from(buffer, 'base64');
        ws.send(`prnt_scrn ${data.toString('base64')}`);
      });
    });

  }