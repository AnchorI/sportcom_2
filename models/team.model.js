const mongoose = require("mongoose");

const Team = mongoose.model(
    "team",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Team;
