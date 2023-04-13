import * as chai from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { describe, beforeEach } from 'mocha';
import CarService 
  from '../../../src/Services/CarService';
import ICar 
  from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

const { expect } = chai;

describe('testa camada service do car', () => {
  const car: ICar = {
    model: 'Fusca',
    year: 1968,
    color: 'Preto',
    status: false,
    buyValue: 2000,
    doorsQty: 2,
    seatsQty: 5,
  };
  const carResult: Car = new Car({
    id: '123',
    model: 'Fusca',
    year: 1968,
    color: 'Preto',
    status: false,
    buyValue: 2000,
    doorsQty: 2,
    seatsQty: 5,
  });

  beforeEach(() => {
    sinon.restore();
  });

  it('retorna todos os carros', async function () {
    sinon
      .stub(Model, 'find')
      .resolves([carResult]);
    const service = new CarService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal([carResult]);
  });

  it('retorna um carro pelo id', async function () {
    sinon
      .stub(Model, 'findById')
      .resolves(carResult);
    const service = new CarService();
    const result = await service.getById('123');
    expect(result).to.be.deep.equal(carResult);
  });

  it('retorna um carro', async function () {
    sinon
      .stub(Model, 'create')
      .resolves(carResult);
    const service = new CarService();
    const result = await service.create(car);
    expect(result).to.be.deep.equal(carResult);
  });

  // it('se falha com id inválido', async function () {
  //   sinon
  //     .stub(Model, 'findById')
  //     .resolves([carResult][0]);
  //   const motorcycleService = new CarService();
  //   const result = await motorcycleService.getAll();
  //   expect(result).to.deep.equal({ message: 'Invalid mongo id' });
  // });

  // it('se falha com car inválido', async function () {
  //   sinon
  //     .stub(Model, 'findById')
  //     .resolves([carResult][1]);
  //   const motorcycleService = new CarService();
  //   const result = await motorcycleService.getAll();
  //   expect(result).to.deep.equal({ message: 'Motorcycle not found' });
  // });
});
