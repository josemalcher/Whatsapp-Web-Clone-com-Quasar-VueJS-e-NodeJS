const UserController    = require('./apps/Controllers/UserController');
const MessageController = require('./apps/Controllers/MessageController');
const {Router}          = require('express');

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.send({message: 'Connected with Success'})
})

routes.post('/user', UserController.insert);
routes.get('/user/:email', UserController.getUser);
routes.get('/users', UserController.getAllUsers);

routes.post('/message', MessageController.sendMessage);
routes.get('/messages/:userId/:myId', MessageController.listAllMessages);

module.exports = routes;