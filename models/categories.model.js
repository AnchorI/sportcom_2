const mongoose = require("mongoose");

const Categories = mongoose.model(
    "categories",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Categories;
