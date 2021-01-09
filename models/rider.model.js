const mongoose = require("mongoose");

const Rider = mongoose.model(
    "rider",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Rider;
