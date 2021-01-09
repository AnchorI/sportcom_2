const mongoose = require("mongoose");

const Rider = mongoose.model(
    "rider",
    new mongoose.Schema({
        name: {type: String, required: true, max: 40},
        position: {type: Number},
        title: {type: String},
        description: {type: String}
    })
);

module.exports = Rider;
