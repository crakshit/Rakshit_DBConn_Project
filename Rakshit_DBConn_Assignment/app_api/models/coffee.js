var mongoose = require('mongoose');

// var placeSchema = new mongoose.Schema({
//     town: {
//         type: String,
//         require: true
//     },
//     state: {
//         typr: String,
//     },
//     country: {
//         type: String,
//         require: true
//     }
// }); 

var coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    flavours: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    town: {
        type: String,
        require: true
    },
    state: {
        typr: String,
    },
    country: {
        type: String,
        require: true
    }
});

mongoose.model('Coffee', coffeeSchema, 'coffeeCollection');