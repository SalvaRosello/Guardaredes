import Express from 'express';
import userRouter from './userRouter.js';
import { staticRouter } from './staticRouter.js';
import { stadisticsRouter } from './stadisticsRouter.js';


const apiRouter = Express.Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/stats", staticRouter);
apiRouter.use("/static", staticRouter);
apiRouter.use("/actions", stadisticsRouter);

export default apiRouter;
