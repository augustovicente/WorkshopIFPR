import express from 'express';
import errorMiddleware from '../middlewares/error';
import routes from './routes';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json()).use(routes).use(errorMiddleware);

export default app;