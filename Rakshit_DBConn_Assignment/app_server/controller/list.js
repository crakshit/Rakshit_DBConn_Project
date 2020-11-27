
//Coffee Array
var coffeeArray = [{name: "Ratnagiri", flavour: "Hooneydew, Apricot, Candy"}, {name: "Professor", flavour: "Peach, Plum, Cherry, Cane"}, {name: "Taisho", flavour: "Red Apple, Peach, Brown Sugar"}];

//list
module.exports.list = function(req, res){
    res.render('list',{title: 'Coffee', coffee: coffeeArray});
};

//display
module.exports.display = function(req, res){
    res.render('display',{title: 'Display Page'});
};