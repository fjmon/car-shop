import { Request, Response, NextFunction } 
  from 'express';
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
    try {
      return this.res.status(201)
        .json(await new CarService()
          .create(car));
    } catch (error) {
      this.next(error);
    }
  }
}