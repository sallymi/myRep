
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('ftmp_index', { title: 'Express' });
};