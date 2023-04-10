import express from 'express';
import CarRouter from './Routes/CarRouter';
import MotorcycleRouter from './Routes/MotorcycleRouter';

const app = express();
app.use(express.json());
app.use('/cars', CarRouter);
app.use('/motorcycles', MotorcycleRouter);

export default app;
