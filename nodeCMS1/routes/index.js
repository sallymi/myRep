
/*
 * GET home page.
 */
var Menu = require('./../persistence/Menu.js');
exports.index = function(req, res){
	Menu.findAll(function(err, obj){
		res.render('ftmp_index', { menuList:obj });
	});
};