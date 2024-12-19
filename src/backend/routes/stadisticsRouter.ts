import Express from 'express';
import { ActionController } from '../controllers/ActionController.js';

const stadisticsRouter = Express.Router();

stadisticsRouter.post('/api/actions/gol', ActionController.registerGol);
stadisticsRouter.post('/api/actions/parada', ActionController.registerParada);

export { stadisticsRouter };