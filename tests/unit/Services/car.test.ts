import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('testar a camada service', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('deve retornar um carro', async function () {
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
    sinon.stub(Model, 'create').resolves(carResult);

    const service = new CarService();
    const result = await service.create(car);
    expect(result).to.be.deep.equal(carResult);
  });
  it('deve retornar uma lista de carros', async function () {
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
    sinon.stub(Model, 'find').resolves([carResult]);

    const service = new CarService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal([carResult]);
  });
  it('deve retornar um carro pelo id', async function () {
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
    sinon.stub(Model, 'findById').resolves(carResult);

    const service = new CarService();
    const result = await service.getById('123');
    expect(result).to.be.deep.equal(carResult);
  });
});