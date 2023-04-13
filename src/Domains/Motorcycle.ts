import IMotorcycle 
  from '../Interfaces/IMotorcycle';
import Vehicles from './Vehicle';

export default class Motorcycle 
  extends Vehicles {
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity }: IMotorcycle) {
    super({ 
      id, 
      model, 
      color, 
      year, 
      status, 
      buyValue, 
    });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}