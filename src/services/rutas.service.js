const { Op } = require('sequelize');
const { Bus } = require('../db/models/buses.model');
const { models } = require('../libs/sequelize');

class RutasService { 
  
    constructor() {}

    async find() {
      const res = await models.Ruta.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Ruta.findByPk(id);
      return res;
    }

    async findRuta(nombreRuta){
      const res = await models.Ruta.findAll({ where: { Nombre: { [Op.like]: `%${nombreRuta}%`} }});
      return res;
    }

    async findRouteBuses(nombreRuta){
      const res = await models.Ruta.findAll({
        where: {
          Nombre: { [Op.like]: `%${nombreRuta}%`},
        },
        include: [{
          model: Bus,
          as: 'Bus'
        }]
      });
      return res;
    }

    async create(data) {
      const res = await models.Ruta.create(data);
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
  
  module.exports = RutasService;