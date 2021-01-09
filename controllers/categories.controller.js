const Categories = require("../models/categories.model");


//<------------GET------------>
exports.categories_get = function (req, res) {
    Categories.find(req.params.id, function (err, categories) {
        if (err) return console.log(err);
        console.log(categories);
        res.set('Access-Control-Allow-Origin', '*')
        res.send(categories);
    })
};

//<---------POST_CREATE----------->

exports.categories_create = function (req,res){
    let categories = new Categories(
        {
            name: req.body.name
        }
    );
    categories.save(function (err){
        if (err) {
            return console.log(err);
        }
        res.send('Categories Created successfully')
    })
};

//<------------Find by ID------------->
exports.categories_details = function (req, res) {
    Categories.findById(req.params.id, function (err, categories) {
        if (err) return console.log(err);
        console.log(categories);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(categories);
    })
};
//<------------Update-------------->
exports.categories_update = function (req, res) {
    Categories.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, categoiries) {
        if (err) return console.log(err);
        res.send('Categories udpated.');
        res.send(categoiries);
    });
};
//<------------Delete-------------->

exports.categories_delete = function (req, res) {
    Categories.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Categories Deleted successfully!');
    })
};

