const UserController = require('./apps/Controllers/UserController');
const {Router} = require('express');

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.send({message: 'Connected with Success'})

})

routes.post('/user', UserController.insert);
routes.get('/user/:email', UserController.getUser);
routes.get('/users', UserController.getAllUsers);

module.exports = routes;