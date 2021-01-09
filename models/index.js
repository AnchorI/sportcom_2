const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
// Models used for create model on MongoDB
db.user = require("./user.model");
db.role = require("./role.model");
db.sportCom2 = require("./product.model");
db.team = require("./team.model");
db.categories = require("./categories.model");
db.rider = require("./rider.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;