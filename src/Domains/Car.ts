import ICar from '../Interfaces/ICar';
import Vehicles from './Vehicle';

export default class Car 
  extends Vehicles {
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    super({ 
      id, 
      model, 
      color, 
      year, 
      status, 
      buyValue, 
    });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(
    doorsQty: number,
  ): void {
    this.doorsQty = doorsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }

  public setSeatsQty(
    seatsQty: number,
  ): void {
    this.seatsQty = seatsQty;
  }
}