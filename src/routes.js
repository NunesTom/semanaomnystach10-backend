const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params: request.querys (Filtros, ordenação, paginação, etc.)
// Route Params: request.params (Identificar um recuro na alteração e na remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);
routes.delete('/devs', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;