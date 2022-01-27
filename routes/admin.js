var express = require('express');
var router = express.Router();

/* Get Admin  Home page */
router.get('/', function (req, res, next) {
  res.render('admin/admin-home', { title: 'Admin- Home', other: true});
});
/* GET Login Page . */
router.get('/login', function (req, res, next) {
  res.render('admin/login', { title: 'Login', other: false });
});

module.exports = router;
