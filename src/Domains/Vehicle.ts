import IVehicle 
  from '../Interfaces/IVehicle';

export default class Vehicle {
  public id?: string;
  protected model: string;
  public year: number;
  public color: string;
  public status: boolean | undefined;
  public buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle
      .status || false;
    this.buyValue = vehicle.buyValue;
  }
}