import Express from 'express';
import path from 'path';
import { publicPath } from '../configuration/config.js';
import { ActionController } from '../controllers/ActionController.js';

const staticRouter = Express.Router();

staticRouter.get('/register', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/register.html");
    res.sendFile(targetFilePath);
});

staticRouter.get('/login', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/login.html");
    res.sendFile(targetFilePath);
});

staticRouter.get('/homePage/:userId', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/homePage.html");
    res.sendFile(targetFilePath);
});

export { staticRouter };