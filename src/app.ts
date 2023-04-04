import express from 'express';
import CarRouter from './Routes/CarRouter';

const app = express();
app.use(express.json());
app.use('/cars', CarRouter);

export default app;
