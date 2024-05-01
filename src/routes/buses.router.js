const express = require('express');
const router = express.Router(); 
const busesController = require('../controllers/buses.controller');

router
    .get('/', busesController.get )
    .get('/:id', busesController.getById )
    .get('/getByName/:ruta', busesController.getByRouteName )
    .post('/', busesController.create )
    .put('/:id', busesController.update )
    .delete('/:id', busesController._delete );

module.exports = router;