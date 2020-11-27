//const express = require('express')

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderHomePage = function (req, res, responseBody) {
    res.render('list', {
        coffees: responseBody
    });
};

const homelist = function (req, res) {
    const path = '/api/coffee';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            console.log(body);
            _renderHomePage(req, res, body);
        });
};


const _renderDetailPage = function (req, res, responseBody) {
    res.render('details', {
        currentCoffee: responseBody
    });
};

const coffeeInfo = function (req, res) {
    const path = `/api/coffee/${req.params.coffeeid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        });
}

const _renderCreatePage = function (req, res) {
    res.render('create', {
        title: "Create New Coffee"
    });
};

const addNewCoffee = function (req, res) {
    _renderCreatePage(req, res);
};

const doAddNewCoffee = function (req, res) {
    const path = '/api/coffee';
    const postdata = {
        name: req.body.name,
        flavours: req.body.flavours.split(','),
        description: req.body.description,
        price: parseFloat(req.body.price),
        town: req.body.town,
        state: req.body.state,
        country: req.body.country

    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/coffee');
            }
        }
    );
};


module.exports = {
    homelist,
    coffeeInfo,
    addNewCoffee,
    doAddNewCoffee
};
