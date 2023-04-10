import { Router } from 'express';
import MotocycleController 
  from '../Controllers/MotorcycleController';

const router = Router();

router.post(
  '/', 
  (req, res, next) => new 
  MotocycleController(req, res, next)
    .create(),
);

router.get(
  '/', 
  (req, res, next) => new 
  MotocycleController(req, res, next)
    .getAll(),
);

router.get(
  '/:id', 
  (req, res, next) => new 
  MotocycleController(req, res, next)
    .getById(),
);

router.put(
  '/:id', 
  (req, res, next) => new 
  MotocycleController(req, res, next)
    .upCarId(),
);

export default router;