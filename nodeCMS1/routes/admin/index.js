/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('admin/config_index', { title: 'Express' });
};

exports.getContent = function(req, res){
	
  res.render('admin/config_listMenu', { title: 'Express' });
};