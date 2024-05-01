const express = require('express');
const router = express.Router(); 
const rutasController = require('../controllers/rutas.controller');

router
    .get('/', rutasController.get )
    .get('/:id', rutasController.getById )
    .get('/getByName/:ruta', rutasController.getByRouteName )
    .get('/getRouteBuses/:ruta', rutasController.getRouteBuses )
    .post('/', rutasController.create )
    .put('/:id', rutasController.update )
    .delete('/:id', rutasController._delete );

module.exports = router;