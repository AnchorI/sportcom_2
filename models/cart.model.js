const mongoose = require("mongoose");

const Cart = mongoose.model(
    "cart",
    new mongoose.Schema({
        fio: {type: String},
        Phone: {type: String},
        Email: {type: String},
        Array: [{name: String,img: String, _id: Object}]
        // dataStart: {type: Date},
        // dataEnd: {type: Date},

    })
);

module.exports = Cart;
