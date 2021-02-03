const mongoose = require("mongoose");

const Categories = mongoose.model(
    "categories",
    new mongoose.Schema({
        name: {type: String},
        img: {type: String},
        category_id: {type: Number},
        description: {type: String}
    })
);

module.exports = Categories;
