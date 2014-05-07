/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('admin/config_index', { title: 'Express' });
};
