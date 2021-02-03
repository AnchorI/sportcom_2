const mongoose = require("mongoose");

const Team = mongoose.model(
    "team",
    new mongoose.Schema({
        name: {type: String, required: true, max: 40},
        team_id: {},
        acticle: {},
        category: {},
        riderId: [],
    })
);

module.exports = Team;
