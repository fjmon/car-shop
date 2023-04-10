import IMotorcycle 
  from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  public id?: string;
  protected model: string;
  public year: number;
  public color: string;
  public status: boolean | undefined;
  public buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = motorcycle
      .status || false;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle
      .engineCapacity;
  }
}