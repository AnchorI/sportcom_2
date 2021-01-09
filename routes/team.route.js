const express = require('express');
const team = express.Router();


const team_controller = require("../controllers/team.controller");

team.get('/get', team_controller.team_get);
team.get('/:id', team_controller.team_details);
team.put('/:id/update', team_controller.team_update);
team.delete('/:id/delete', team_controller.team_delete);
team.post('/create', team_controller.team_create);

module.exports = team;