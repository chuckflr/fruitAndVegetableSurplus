var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fruits & Vegetables Surplus' });
});

router.get('/farmlocations', function(req, res, next) {
  res.render('farmlocations', { title: 'Farm Locations' });
});

router.get('/farmscoalinga', function(req, res, next) {
  res.render('farmscoalinga', { title: 'Farms Coalinga' });
});

router.get('/farmslemoore', function(req, res, next) {
  res.render('farmslemoore', { title: 'Farms Lemoore' });
});

module.exports = router;
