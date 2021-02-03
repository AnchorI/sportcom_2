const mongoose = require("mongoose");

const Rider = mongoose.model(
    "rider",
    new mongoose.Schema({
        name: {type: String, required: true, max: 40},
        img: {},
        user_id: {},
    })
);

module.exports = Rider;
