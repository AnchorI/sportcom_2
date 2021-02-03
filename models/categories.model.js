const mongoose = require("mongoose");

const Categories = mongoose.model(
    "categories",
    new mongoose.Schema({
        name: {type: String},
        img: {type: String},
        categoryId: {type: Number},
        description: {type: String}
    })
);

module.exports = Categories;
