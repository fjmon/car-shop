import { Schema, Model, models, model }
  from 'mongoose';
import ICar from '../Interfaces/ICar';

export default 
abstract class AbstractODM<T> {
  protected schema: Schema<T>;
  protected model: Model<T>;

  constructor(
    schema: Schema<T>, 
    modelName: string,
  ) {
    this.schema = schema;
    this.model = models[modelName] 
    || model(modelName, this.schema);
  }

  public async create(car: T)
    : Promise<T> {
    return this.model
      .create({ ...car });
  }

  public async getAll()
  : Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string)
    : Promise<T | null> {
    return this.model.findById(id);
  }

  public async upCarId(
    id: string, 
    car: ICar,
  ) {
    return this.model.findByIdAndUpdate(
      id, 
      { car }, 
      { new: true },
    );
  }
}