import ICar from '../Interfaces/ICar';
import ICarModel from '../Models/CarModel';
import Car from '../Domains/Car';

export default class CarService {
  private newCar(
    car: ICar | null,
  ): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carModel = new ICarModel();
    return this.newCar(await carModel
      .create(car));
  }
}