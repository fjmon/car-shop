import { Request, Response, NextFunction }
  from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async create() {
    return this.res.status(201)
      .json(await this.motorcycleService
        .create(this.req.body));
  }

  public async getAll() {
    return this.res.status(200)
      .json(await this.motorcycleService
        .getAll());
  }

  public async getById() {
    if (!isValidObjectId(
      this.req.params.id,
    )) {
      return this.res.status(422)
        .json({ 
          message: 'Invalid mongo id' });
    }
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
  }
  
  public async upCarId() {
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

    if (!isValidObjectId(
      this.req.params.id,
    )) {
      return this.res.status(422)
        .json({ 
          message: 'Invalid mongo id' });
    }
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
  }
}