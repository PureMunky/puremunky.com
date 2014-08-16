var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PureMunky' });
});

/* GET About page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'PureMunky' });
});

module.exports = router;
