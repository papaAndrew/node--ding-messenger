var express = require('express');
var router = express.Router();

/* Sign In form */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('login');
});

module.exports = router;
