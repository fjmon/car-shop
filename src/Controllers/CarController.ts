import { Request, Response, NextFunction }
  from 'express';
import { isValidObjectId } 
  from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService 
  from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;

  constructor(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  public async create() {
    const { 
      id, 
      model, 
      year, 
      color, 
      status, 
      buyValue, 
      doorsQty, 
      seatsQty, 
    } = this.req.body;
    const car: ICar = {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };
    return this.res.status(201)
      .json(await new CarService()
        .create(car));
  }

  async getAll() {
    return this.res.status(200)
      .json(await this.carService
        .getAll());
  }
  
  async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ 
          message: 'Invalid mongo id',
        });
    }
    const car = await this.carService
      .getById(id);
    if (!car) {
      return this.res.status(404)
        .json({ 
          message: 'Car not found', 
        });
    }
    return this.res.status(200)
      .json(car);
  }
  async upCarId() {
    const { 
      model, 
      year, 
      color, 
      status, 
      buyValue, 
      doorsQty, 
      seatsQty, 
    } = this.req.body;
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ 
          message: 'Invalid mongo id', 
        });
    }
    const car: ICar = {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };
    if (!(await this.carService
      .upCarId(id, car))) {
      return this.res.status(404)
        .json({ message: 'Car not found' });
    }
    return this.res.status(200)
      .json(await this.carService
        .upCarId(id, car));
  }
}
