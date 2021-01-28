const mongoose = require("mongoose");

const Cart = mongoose.model(
    "cart",
    new mongoose.Schema({
        name: {type: String},
        Phone: {type: String},
        Email: {type: String},
        items: [],
        pidor: [],

    })
);

module.exports = Cart;
