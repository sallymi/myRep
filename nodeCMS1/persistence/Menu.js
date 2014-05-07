var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MenuSchema = new Schema({
	name : String,
	alias : [String],
	publish : Date,
	create_date : { type: Date, "default": Date.now},
	images :{
	coverSmall:String,
	coverBig:String,
	},
	source :[{
	source:String,
	link:String,
	swfLink:String,
	quality:String,
	version:String,
	lang:String,
	subtitle:String,
	create_date : { type: Date, "default": Date.now }
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

module.exports = new MenuDAO();
