var Menu = require('./../../persistence/Menu.js');
exports.menuAdd = function(req, res) {
	if(req.params.name){//update
		return res.render('menu', {
			title:req.params.name+'|电影|管理|moive.me',
			label:'编辑电影:'+req.params.name,
			movie:req.params.name
		});
	} else {
		return res.render('menu',{
			title:'新增加|电影|管理|moive.me',
			label:'新增加电影',
			movie:false
		});
	}
};
exports.doMenuAdd = function(req, res) {
	var json = req.body;
	var canAdd = false;
	console.log(json);
	Menu.findByName(json.name, function(err, obj){
		if(obj == null)
			canAdd = true;
		if(canAdd == false){//update
			res.send({'success':true});
		} else {//insert
			Menu.save(json, function(err){
				if(err) {
					res.send({'success':false,'err':err});
				} else {
					res.send({'success':true});
				}
			});
		}
	});
	
};
exports.menuJSON = function(req, res) {
	Menu.findByName(req.params.name,function(err, obj){
	res.send(obj);
	});
};
exports.getMenus = function(req,res) {
	Menu.findAll(function(err, obj){
		res.render('admin/config_listMenu', { menuList:obj });
	});	
};
exports.menuList = function(req, res) {
	
};