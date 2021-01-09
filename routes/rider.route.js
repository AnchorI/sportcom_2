const express = require('express');
const rider = express.Router();


const rider_controller = require("../controllers/rider.controller");

rider.get('/get', rider_controller.rider_get);
rider.get('/:id', rider_controller.rider_details);
rider.put('/:id/update', rider_controller.rider_update);
rider.delete('/:id/delete', rider_controller.rider_delete);
rider.post('/create', rider_controller.rider_create);

module.exports = rider;