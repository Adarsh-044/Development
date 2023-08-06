const express = require("express");

const { purchaseFruit, updateFruit } = require('./12_controllers');

const fruitRouter = express.Router();

fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        // res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
        res.send(req.params);
    })

fruitRouter.route
    .post(purchaseFruit)
    .put(updateFruit)

// export the entire router so we can require() it in server.js
module.exports = fruitRouter;   // here module.exports.fruitRouter is not because it is only providing the path not the object





// Method - 2: It basically handles promises automatically, while the above Router() can't handle it. 
const router = require('express-promise-router');
const fruitRoute = router();
fruitRoute.route('/')
      .get((req, res) => {
            res.send('Fruit Route');
      })
module.exports = fruitRoute; 

