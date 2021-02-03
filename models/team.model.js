const mongoose = require("mongoose");

const Team = mongoose.model(
    "team",
    new mongoose.Schema({
        name: {type: String, required: true, max: 40},
        teamId: {type: Number},
        acticle: {},
        category: {},
        riderId: [],
            img: {},
    })
);

module.exports = Team;
