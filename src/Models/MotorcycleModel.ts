import { Schema } from 'mongoose';
import IMotorcycle 
  from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default 
class IMotorcycleModel 
  extends AbstractODM<IMotorcycle> {
  constructor() {
    super(new Schema<IMotorcycle>({
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
      category: { 
        type: String, 
        required: true, 
        enum: ['Street', 'Custom', 'Trail'],
      },
      engineCapacity: { 
        type: Number, required: true },

    }), 'Motorcycle');
  }
}