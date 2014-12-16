var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/abc', function(req, res) {
    console.log('fdsafasfsadfasfa')
  res.render('index', { title: 'Express' });
});

module.exports = router;
