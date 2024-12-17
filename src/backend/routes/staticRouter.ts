import Express from 'express';
import path from 'path';
import { publicPath } from '../configuration/config.js';
import { StatsController } from '../controllers/StatsController.js';

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

staticRouter.get('/api/stats/:userId', async (req: Express.Request, res: Express.Response) => {
    try {
        const userId = req.params.userId;
        const statsController = new StatsController();
        const stats = await statsController.getUserStats(userId);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener estadísticas' });
    }
});

export { staticRouter };