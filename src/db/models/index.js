const { Ruta, RutaSchema } = require('./rutas.model');
const { Bus, BusSchema } = require('./buses.model');

function setupModels(sequelize) {
    Ruta.init(RutaSchema, Ruta.config(sequelize));
    Bus.init(BusSchema, Bus.config(sequelize));
    Bus.belongsTo(Ruta, {
        as: 'Ruta',
        foreignKey: 'IdRuta'
    });
    Ruta.hasMany(Bus,{
        as: 'Bus',
        foreignKey: 'IdRuta'
    });
}

module.exports = setupModels;