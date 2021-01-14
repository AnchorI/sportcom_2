const express = require('express');
const cart = express.Router();

const cart_controller = require('../controllers/cart.controllers');

cart.get('/get', cart_controller.cart_get);
cart.get('/:id', cart_controller.cart_details);
cart.put('/:id/update', cart_controller.cart_update);
cart.delete('/:id/delete', cart_controller.cart_delete);
cart.post('/create', cart_controller.cart_create);


module.exports = cart;