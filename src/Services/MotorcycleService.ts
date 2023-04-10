import IMotorcycle 
  from '../Interfaces/IMotorcycle';
import MotorcycleModel 
  from '../Models/MotorcycleModel';
import Motorcycle 
  from '../Domains/Motorcycle';

export default 
class IMotorcycleService {
  private MotorcycleModel: 
  MotorcycleModel;

  constructor() {
    this.MotorcycleModel = new 
    MotorcycleModel();
  }

  public async create(
    motorcycle: IMotorcycle,
  ) {
    if (!motorcycle) return null;
    return new Motorcycle(
      await this.MotorcycleModel
        .create(motorcycle),
    );
  }

  public async getAll() {
    return (await this.MotorcycleModel
      .getAll()).map((motorcycle) => new
    Motorcycle(motorcycle));
  }

  public async getById(id: string) {
    const motorcycle = await new 
    MotorcycleModel().getById(id);
    if (!motorcycle) return null;
    return new Motorcycle(motorcycle);
  }

  public async upCarId(
    id: string, 
    motorcycle: IMotorcycle,
  ) {
    const upMotorcycle = await new 
    MotorcycleModel()
      .upCarId(id, motorcycle);
    if (!upMotorcycle) return null;
    return new Motorcycle(upMotorcycle);
  }
}
