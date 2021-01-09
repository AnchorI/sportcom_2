const express = require('express');
const bodyParser = require('body-parser');
//const cors = require("cors");
const product = require('./routes/product.route');
const categories = require("./routes/categories.route");
const rider = require('./routes/rider.route');
const team = require('./routes/team.route')// Imports routes for the products
const views = require('./views/views');
const app = express();
const db = require("./models");
const Role = db.role;
// Set up mongoose connection
const mongoose = require('mongoose');

//<------Cors-------->

//let corsOptions = {
//    origin: "http://localhost:8081" // Will changed on server ip:port
//};

//<------Cors-------->


//<------MONGODB_CONNECT-------->
let dev_db_url = 'mongodb+srv://anchori:A1mBf0W3XL21nlLJ@sportcomdb.wsq9v.mongodb.net/sportcomdb?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

let dbb = mongoose.connection;
dbb.on('error', console.error.bind(console, 'MongoDB connection error:'));
//<------MONGODB_CONNECT-------->

// <-------app.use----->
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', product);
app.use('/',views);
app.use('/categories', categories);
app.use('/rider', rider);
app.use('/team', team);


//<--------AddRolesToDB------->
// This part of script for auto-create roles in new Project, mb in the future take out from app.js
function   initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}
//<--------AddRolesToDB------->
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
//<---------Port-------->

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});