import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { describe, afterEach } from 'mocha';
import MotorcycleService 
  from '../../../src/Services/MotorcycleService';
import Motorcycle 
  from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('testa camada Service do motorcycles', () => {
  const moto: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };
  const motoModel = 'Honda Cb 600f Hornet';
  const motoResult = new Motorcycle({
    id: '641ba7ed17060851bebafad2',
    model: motoModel,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  });

  afterEach(() => {
    sinon.restore();
  });

  it('retorna todas as motos', async function () {
    sinon
      .stub(Model, 'find')
      .resolves([motoResult]);
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.getAll();
    expect(result).to.deep.equal([motoResult]);
  });

  it('retorna uma moto por id', async function () {
    sinon
      .stub(Model, 'findById')
      .resolves([motoResult][0]);
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.getById('641ba7ed17060851bebafad2');
    expect(result).to.deep.equal([motoResult][0]);
  });

  it('retorna uma moto', async function () {
    sinon
      .stub(Model, 'create')
      .resolves(motoResult);
    const service = new MotorcycleService();
    const result = await service.create(moto);
    expect(result).to.be.deep.equal(motoResult);
  });

  // it('se falha com id inválido', async function () {
  //   sinon
  //     .stub(Model, 'findById')
  //     .resolves([motoResult][0]);
  //   const motorcycleService = new MotorcycleService();
  //   const result = await motorcycleService.getAll();
  //   expect(result).to.deep.equal({ message: 'Invalid mongo id' });
  // });

  // it('se falha com moto inválida', async function () {
  //   sinon
  //     .stub(Model, 'findById')
  //     .resolves([motoResult][1]);
  //   const motorcycleService = new MotorcycleService();
  //   const result = await motorcycleService.getAll();
  //   expect(result).to.deep.equal({ message: 'Motorcycle not found' });
  // });
});