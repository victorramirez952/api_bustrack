const express = require('express'); 

const rutasRouter = require('./rutas.router');
const busesRouter = require('./buses.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/rutas', rutasRouter);
  router.use('/buses', busesRouter)
}

module.exports = routerApi;