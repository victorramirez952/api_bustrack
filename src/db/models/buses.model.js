const { Model, DataTypes } = require('sequelize');

const BUSES_TABLE = 'Buses';

class Bus extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: BUSES_TABLE,
            modelName: 'Bus',
            timestamps: false
        }
    }
} 


const BusSchema = {
    Matricula: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
        field:'Matricula'
    },
    Latitud: {
        allowNull: true,
        type: DataTypes.DOUBLE,
        field:'Latitud'
    },
    Longitud:{ 
        allowNull:true,
        type: DataTypes.DOUBLE,
        field: 'Longitud'
    },
    Activo:{
        allowNull: true,
        type: DataTypes.BOOLEAN,
        field: 'Activo'
    },
    IdRuta: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
}
  
module.exports = { Bus, BusSchema };