const { json } = require('sequelize');
const BusesService = require('../services/buses.service');
const service = new BusesService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json({message:response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json({body: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getByRouteName = async (req, res) => {
    try{
        const { ruta } = req.params;
        const response = await service.findRuta(ruta);
        res.json({body: response});
    } catch(error){
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        console.log(json(response.dataValues));
        res.json({body: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById, getByRouteName, update, _delete
};