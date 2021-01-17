const Cart = require('../models/cart.model');


//Simple version, without validation or sanitation
exports.cart_get = function (req, res) {
    Cart.find(req.params.id, function (err, product) {
        if (err) return console.log(err);
        console.log(product);
        res.set('Access-Control-Allow-Origin', '*')
        res.send(product);
    })
};
//<----------Create Cart------------>
exports.cart_create = function (req,res){
    let product = new Cart(
        {
            name: req.body.name,
            phone: req.body.phone,
            title: req.body.title,
            data: req.body.data
        }
    );
//<---------------------Just Test---------------->
    product.save(function (err){
        if (err) {
            return console.log(err);
        }
        res.send('Cart Created successfully')
    })
};
//<------------Find by ID------------->
exports.cart_details = function (req, res) {
    Cart.findById(req.params.id, function (err, product) {
        if (err) return console.log(err);
        console.log(product);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(product);
    })
};
//<------------Update-------------->
exports.cart_update = function (req, res) {
    Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return console.log(err);
        res.send('Cart udpated.');
    });
};
//<------------Delete-------------->

exports.cart_delete = function (req, res) {
    Cart.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Deleted successfully!');
    })
};


//<----------------HTTP------------->


