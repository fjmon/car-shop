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
}
export default ICarModel;