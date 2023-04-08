import ICar 
  from '../Interfaces/ICar';
import ICarModel 
  from '../Models/CarModel';
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
    return this.newCar(
      await new ICarModel()
        .create(car),
    );
  }

  public async getAll() {
    return (await new ICarModel()
      .getAll())
      .map((car) => this
        .newCar(car));
  }

  public async getById(
    id: string,
  ) {
    return this.newCar(
      await new ICarModel()
        .getById(id),
    );
  }
}