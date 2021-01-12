const express = require('express');
const cart = express.Router();

const cart_controller = require('/controllers/cart.controllers');

cart.post('/cart', cart_controller.cart_get);

module.exports = cart;