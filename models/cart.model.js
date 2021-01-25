const mongoose = require("mongoose");

const Cart = mongoose.model(
    "cart",
    new mongoose.Schema({
        name: {type: String, max: 50},
        phone: {type: String, max: 20},
        title: {type: String},
        description: {type: String},
        data: [{
                eename: String,
                id: String,
                img: String,
                }]

    })
);

module.exports = Cart;
