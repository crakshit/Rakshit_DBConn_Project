const index = function(req, res){
    res.render('index',{title: 'Express, My name is Rakshit.'});
};

module.exports = {
    index
};