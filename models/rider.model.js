const mongoose = require("mongoose");

const Rider = mongoose.model(
    "rider",
    new mongoose.Schema({
        name: {type: String, required: true, max: 40},
        img: {},
        userId: {type: Number},
    })
);

module.exports = Rider;
