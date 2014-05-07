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
	console.log(req.body.content);
	var json = req.body.content;
	if(json._id){//update
	} else {//insert
		Menu.save(json, function(err){
			if(err) {
				res.send({'success':false,'err':err});
			} else {
				res.send({'success':true});
			}
		});
	}
};