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
