const mongoose = require('mongoose');
const Coffee = mongoose.model('Coffee');

module.exports.getCoffees = function (req, res) {
    Coffee.find().exec(function (err, data) {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(200)
            .json(data);
    });
};

module.exports.createCoffee = function (req, res) {
    Coffee.create({
        name: req.body.name,
        flavours: req.body.flavours,
        description: req.body.description,
        price: parseFloat(req.body.price),
        town: req.body.town,
        state: req.body.state,
        country: req.body.country

    }, (err, data) => {
        console.log(data);
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(data);
        }
    });
};

module.exports.getSingleCoffee = function (req, res) {
    if (req.params && req.params.coffeeid) {
        Coffee
            .findById(req.params.coffeeid)
            .exec((err, data) => {
                if (!data) {
                    res
                        .status(404)
                        .json({
                            "message": "coffeeid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(data);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No coffeeid in request"
            });
    }
};

module.exports.updateCoffee = function (req, res) {

    if (!req.params.coffeeid) {
        res
            .status(404)
            .json({
                "message": "Not found"
            });
        return;
    }

    Coffee.findById(req.params.coffeeid)
        .exec((err, data) => {
            if (!data) {
                res
                    .status(404)
                    .json({
                        "message": "coffeeid not found"
                    });
                return;
            } else if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            data.name = req.body.name,
                data.flavours = req.body.flavours,
                data.description = req.body.description,
                data.price = parseFloat(req.body.price),
                data.town = req.body.town,
                data.state = req.body.state,
                data.country = req.body.country

            data.save((err, data) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    res
                        .status(201)
                        .json(data);
                }
            });
        });
};

module.exports.deleteCoffee = function (req, res) {
    const cooffeeid = req.params.coffeeid;

    if (cooffeeid) {
        Coffee
            .findByIdAndRemove(cooffeeid)
            .exec((err, data) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "Not found"
            });
    }
};
