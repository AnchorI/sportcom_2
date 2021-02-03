const Rider = require("../models/rider.model");


//<------------GET------------>
exports.rider_get = function (req, res) {
    Rider.find(req.params.id, function (err, rider) {
        if (err) return console.log(err);
        console.log(rider);
        res.set('Access-Control-Allow-Origin', '*');
        // res.set('Access-Control-Allow-Methods', 'POST');
        // res.set('Access-Control-Allow-Headers', 'x-requested-with');
        // res.set('Access-Control-Allow-Credentials', 'false');

        res.send(rider);
    })
};

//<---------POST_CREATE----------->

exports.rider_create = function (req,res){
    let rider = new Rider(
        {
            name: req.body.name,
            img: req.body.img,
            user_id: req.body.user_id,

        }
    );
    rider.save(function (err){
        if (err) {
            return console.log(err);
        }
        res.send('Rider Created successfully')
    })
};

//<------------Find by ID------------->
exports.rider_details = function (req, res) {
    Rider.findById(req.params.id, function (err, rider) {
        if (err) return console.log(err);
        console.log(rider);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(rider);
    })
};
//<------------Update-------------->
exports.rider_update = function (req, res) {
    Rider.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, rider) {
        if (err) return console.log(err);
        res.send('Rider udpated.');
        res.send(rider);
    });
};
//<------------Delete-------------->

exports.rider_delete = function (req, res) {
    Rider.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Rider Deleted successfully!');
    })
};

