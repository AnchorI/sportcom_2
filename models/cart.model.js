const mongoose = require("mongoose");

const Cart = mongoose.model(
    "cart",
    new mongoose.Schema({
        name: {type: String, required: true, max: 50},
        phone: {type: String, required: true, max: 20},
        title: {type: String},
        description: {type: String},
        _id: {type: Object}
    })
);

module.exports = Cart;
