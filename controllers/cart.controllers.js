

exports.cart_get = function (req,res) {
    console.log(req.body.key);
    res.send(req.body.key);
}