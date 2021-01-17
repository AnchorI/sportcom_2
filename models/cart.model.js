const mongoose = require("mongoose");

const Cart = mongoose.model(
    "cart",
    new mongoose.Schema({
        name: {type: String, max: 50},
        phone: {type: String, max: 20},
        title: {type: String},
        description: {type: String},
        data: [{
                name: String,
                img: String,
                id: String,
                }
                ],
    })
);

module.exports = Cart;
