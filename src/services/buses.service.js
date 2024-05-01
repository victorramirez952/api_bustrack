const { models } = require('../libs/sequelize');

class BusesService { 
  
    constructor() {}

    async find() {
      const res = await models.Bus.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Bus.findByPk(id);
      return res;
    }

    async findBus(nombreBus){
      const res = await models.Bus.findAll({ where: { Nombre: nombreBus }});
      return res;
    }
    

    async create(data) {
      const res = await models.Bus.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = BusesService;