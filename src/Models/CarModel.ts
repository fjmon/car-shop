import { Schema, model, Model, models } 
  from 'mongoose';
import ICar from '../Interfaces/ICar';

class ICarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema({
      model: { 
        type: String, required: true },
      year: { 
        type: Number, required: true },
      color: { 
        type: String, required: true },
      status: { 
        type: Boolean,
        default: false, 
        required: true },
      buyValue: { 
        type: Number, required: true },
      doorsQty: { 
        type: Number, required: true },
      seatsQty: { 
        type: Number, required: true },
    });
    this.model = models.Car 
    || model('Car', this.schema);
  }

  public async create(car: ICar): 
  Promise<ICar> {
    return this.model
      .create({ ...car });
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(id: string):
  Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async upCarId(
    id: string, 
    car: ICar,
  ): 
    Promise<ICar | null> {
    return this.model
      .findByIdAndUpdate(
        id, 
        car, 
        { new: true },
      );
  }
}

export default ICarModel;