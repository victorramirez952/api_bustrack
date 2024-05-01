const { Model, DataTypes } = require('sequelize');

const RUTAS_TABLE = 'Rutas';

class Ruta extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: RUTAS_TABLE,
            modelName: 'Ruta',
            timestamps: false
        }
    }
} 

const RutaSchema = {
    IdRuta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field:'IdRuta'
    },
    Nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'Nombre'
    },
    Activo:{ 
        allowNull:false,
        type: DataTypes.BOOLEAN,
        field: 'Activo'
    },
    HoraInicio:{
        allowNull: true,
        type: DataTypes.TIME,
        field: 'HoraInicio'
    },
    HoraFin:{
        allowNull: true,
        type: DataTypes.TIME,
        field: 'HoraFin'
    }
}
  
module.exports = { Ruta, RutaSchema };