const Team = require("../models/team.model");


//<------------GET------------>
exports.team_get = function (req, res) {
    Team.find(req.params.id, function (err, team) {
        if (err) return console.log(err);
        console.log(team);
        res.set('Access-Control-Allow-Origin', '*')
        res.send(team);
    })
};

//<---------POST_CREATE----------->

exports.team_create = function (req,res){
    let team = new Team(
        {
            name: req.body.name,
            team_id: req.body.team_id,
            acticle: req.body.article,
            category: req.body.category,
            riderId: [req.body.riderId],
        }
    );
    team.save(function (err){
        if (err) {
            return console.log(err);
        }
        res.send('Team Created successfully')
    })
};

//<------------Find by ID------------->
exports.team_details = function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        if (err) return console.log(err);
        console.log(team);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(team);
    })
};
//<------------Update-------------->
exports.team_update = function (req, res) {
    Team.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, team) {
        if (err) return console.log(err);
        res.send('Team udpated.');
        res.send(team);
    });
};
//<------------Delete-------------->

exports.team_delete = function (req, res) {
    Team.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Team Deleted successfully!');
    })
};

