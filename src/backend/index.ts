import express from 'express';
import apiRouter from './routes/apiRouter.js';
import { publicPath } from './configuration/config.js';
import { staticRouter } from './routes/staticRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
const app = express();
const port = 3000;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, '../public/scripts')));
 
app.use("/", staticRouter);
app.use("/api/v1", apiRouter);
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
      success: false,
      message: 'Internal Server Error',
  });
});