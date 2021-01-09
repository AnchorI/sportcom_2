const express = require('express');
const categories = express.Router();


const categories_controller = require("../controllers/categories.controller");

categories.get('/get', categories_controller.categories_get);
categories.get('/:id', categories_controller.categories_details);
categories.put('/:id/update', categories_controller.categories_update);
categories.delete('/:id/delete', categories_controller.categories_delete);
categories.post('/create', categories_controller.categories_create);

module.exports = categories;