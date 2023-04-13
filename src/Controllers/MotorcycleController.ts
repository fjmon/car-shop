import { Request, Response, NextFunction }
  from 'express';
import MotorcycleService 
  from '../Services/MotorcycleService';
import IMotorcycle 
  from '../Interfaces/IMotorcycle';

export default 
class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcycleService: 
  MotorcycleService;

  constructor(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleService = new 
    MotorcycleService();
  }

  async create() {
    return this.res.status(201)
      .json(await this.motorcycleService
        .create(this.req.body));
  }

  async getAll() {
    return this.res.status(200)
      .json(await this.motorcycleService
        .getAll());
  }

  async getById() {
    try {
      if (!await this.motorcycleService
        .getById(this.req.params.id)) {
        return this.res.status(404)
          .json({ 
            message: 'Motorcycle not found',
          });
      }
      return this.res.status(200)
        .json(await this.motorcycleService
          .getById(this.req.params.id));
    } catch {
      return this.res.status(422)
        .json({ 
          message: 'Invalid mongo id' });
    }
  }
  
  async upCarId() {
    const {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    } = this.req.body;
    const motorcycle: IMotorcycle = {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    };
    try {
      if (!await this.motorcycleService
        .upCarId(
          this.req.params.id, 
          motorcycle,
        )) {
        return this.res.status(404)
          .json({ 
            message: 'Motorcycle not found',
          });
      }
      return this.res.status(200)
        .json(await this.motorcycleService
          .upCarId(
            this.req.params.id, 
            motorcycle,
          ));
    } catch {
      return this.res.status(422)
        .json({ 
          message: 'Invalid mongo id' });
    }
  }
}