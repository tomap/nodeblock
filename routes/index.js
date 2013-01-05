
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
						title: 'Express',
						prodSuffix:global.inProd?'.min':''
 					});
};