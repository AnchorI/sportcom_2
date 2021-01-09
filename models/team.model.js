const mongoose = require("mongoose");

const Team = mongoose.model(
    "team",
    new mongoose.Schema({
        name: {type: String, required: true, max: 40},
        position: {type: Number},
        title: {type: String},
        description: {type: String}
    })
);

module.exports = Team;
