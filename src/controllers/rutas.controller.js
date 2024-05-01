const RutasService = require('../services/rutas.service');
const service = new RutasService();

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

const getRouteBuses = async(req, res) => {
    try{
        const { ruta } = req.params;
        const response = await service.findRouteBuses(ruta);
        // console.log("response: ", response[0].dataValues.Bus);
        res.json({body: response[0].dataValues.Bus});
    } catch(error){
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
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
    create, get, getById, getByRouteName, getRouteBuses, update, _delete
};