// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
//
// let ProductSchema = new Schema({
//     name: {type: String, required: true, max: 100},
//     price: {type: Number, required: true},
//     pd: {type: Number, required: true},
//     check: {type: Boolean, required: false}
//
// });
//
//
// // Export the model
// module.exports = mongoose.model('sportcom2db', ProductSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportCom2 = mongoose.model(
    "sportcom2",
    new mongoose.Schema({
        name: String
    })
);

module.exports = sportCom2;
