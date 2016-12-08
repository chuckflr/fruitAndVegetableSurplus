var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/farmlocations', function(req, res, next) {
  res.render('farmlocations', { title: 'Express' });
});

router.get('/farmscoalinga', function(req, res, next) {
  res.render('farmscoalinga', { title: 'Express' });
});

router.get('/farmslemoore', function(req, res, next) {
  res.render('farmslemoore', { title: 'Express' });
});

module.exports = router;
