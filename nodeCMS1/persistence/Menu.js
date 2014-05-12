var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MenuSchema = new Schema({
	name : String,
	type : String,
	description : String,
	href : String,
	test : [{
	_name : String,
	_type : String,
	_description : String,
	brief : String,
	image : String
	}]
});
var Menu = mongodb.mongoose.model("Menu", MenuSchema);
var MenuDAO = function(){};
MenuDAO.prototype.save = function(obj, callback) {
	var instance = new Menu(obj);
	instance.save(function(err){
		callback(err);
	});
};
MenuDAO.prototype.update = function(obj, callback) {
	var instance = new Menu(obj);
	instance.update(function(err){
		callback(err);
	});
};
MenuDAO.prototype.findByName = function(name, callback) {
	Menu.findOne({name:name}, function(err, obj){
	callback(err, obj);
	});
};
MenuDAO.prototype.findByType = function(name, callback) {
	Menu.findOne({type:name}, function(err, obj){
	callback(err, obj);
	});
};
MenuDAO.prototype.findAll = function(callback) {
	Menu.find().exec(function(err, menus){
		callback(err, menus);
	});
};

module.exports = new MenuDAO();

