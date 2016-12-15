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

router.get('/rancho', function(req, res, next) {
  res.render('rancho', { title: 'Rancho Notso Grande' });
});

router.get('/genesis', function(req, res, next) {
  res.render('genesis', { title: 'Genesis Organic Farm' });
});

router.get('/rustica', function(req, res, next) {
  res.render('rustica', { title: 'Genesis Organic Farm' });
});

module.exports = router;
