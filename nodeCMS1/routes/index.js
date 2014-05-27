
/*
 * GET home page.
 */
var Menu = require('./../persistence/Menu.js');
exports.index = function(req, res){
	if(req.params.name === "ftmp"){
		Menu.findAll(function(err, obj){
			res.render('ftmp_index', { menuList:obj });
		});
	}
	if(req.params.name === "hwwx"){
		res.render('hwwx_index');
	}
	if(req.params.name === "steak"){
		res.render('steakhouse_index');
	}
};
exports.food = function(req, res){
	res.render('steakhouse_food');
};